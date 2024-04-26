import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearFormData } from '../../reducers/formReducer';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

export default function SurveyNew() {
    const [showFormReview, setShowFormReview] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearFormData());
        };
    }, [dispatch]);

    return (
        <div>
            <h2>{showFormReview ? 'Review Your Survey' : 'New Survey'}</h2>
            {showFormReview ? (
                <SurveyReview onBack={() => setShowFormReview(false)} />
            ) : (
                <SurveyForm onNext={() => setShowFormReview(true)} />
            )}
        </div>
    );
}
