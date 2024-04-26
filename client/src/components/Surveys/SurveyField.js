import { Field } from 'react-final-form';

export default function SurveyField({ label, name, isTextArea = false, type = 'text', placeholder }) {
    const renderField = (input) => {
        if (isTextArea) {
            return <textarea className="materialize-textarea" {...input} placeholder={placeholder || label}></textarea>;
        }
        return <input placeholder={placeholder || label} {...input} type={type} />;
    };

    return (
        <Field name={name}>
            {({ input, meta: { error, touched } }) => (
                <div>
                    <label>{label}</label>
                    {renderField(input)}
                    {error && touched && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
                </div>
            )}
        </Field>
    );
}
