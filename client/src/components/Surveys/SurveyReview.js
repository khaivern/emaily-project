import { useDispatch, useSelector } from 'react-redux';
import formFields from './formFields';
import { submitSurvey } from '../../reducers/formReducer';
import { useNavigate } from 'react-router-dom';

export default function SurveyReview({ onBack }) {
    const { form } = useSelector((state) => state.form);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function sendSurveyHandler() {
        dispatch(submitSurvey(form, navigate));
    }

    return (
        <div>
            {formFields.map(({ name, label }) => (
                <div key={name}>
                    <label>{label}</label>
                    <p>{form[name]}</p>
                </div>
            ))}
            <button type="button" className="btn-flat grey darken-1 white-text" onClick={onBack}>
                Back
            </button>
            <button className="right blue btn waves-effect waves-light" onClick={sendSurveyHandler}>
                Send Survey
                <i className="material-icons right">send</i>
            </button>
        </div>
    );
}
