import createDecorator from 'final-form-focus';
import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData } from '../../reducers/formReducer';
import { validateEmail } from '../../utils/validateEmail';
import SurveyField from './SurveyField';
import formFields from './formFields';

export default function SurveyForm({ onNext }) {
    const { form } = useSelector((state) => state.form);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const focusOnError = createDecorator();

    function cancelHandler() {
        navigate('/surveys');
    }

    function submitHandler(values) {
        dispatch(setFormData({ ...values, recipients: removeEmptyEmails(values.recipients) }));
        onNext();
    }

    function validateHandler(values) {
        const errors = {};

        if (!values.title || !values.title.trim()) {
            errors.title = 'You must provide a title';
        }

        if (!values.subject || !values.subject.trim()) {
            errors.subject = 'You must provide a subject';
        }

        if (!values.body || !values.body.trim()) {
            errors.body = 'You must provide a body';
        }

        if (!values.recipients || !values.recipients.trim()) {
            errors.recipients = 'You must provide recipients';
        }

        const emailIsInvalid = validateEmail(values.recipients || '');
        if (emailIsInvalid) {
            errors.recipients = emailIsInvalid;
        }

        return errors;
    }

    function removeEmptyEmails(emails) {
        return emails
            .split(';')
            .map((email) => email.trim())
            .filter((email) => email)
            .join(';');
    }

    return (
        <Form onSubmit={submitHandler} validate={validateHandler} decorators={[focusOnError]} initialValues={form}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    {formFields.map((field) => (
                        <SurveyField key={field.name} {...field} />
                    ))}
                    <button type="button" className="btn-flat grey darken-1 white-text" onClick={cancelHandler}>
                        Cancel
                    </button>

                    <button className="right blue btn waves-effect waves-light">
                        Next
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            )}
        </Form>
    );
}
