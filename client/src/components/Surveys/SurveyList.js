import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSurveys } from '../../reducers/surveyReducer';

export default function SurveyList() {
    const { surveys } = useSelector((state) => state.surveys);
    console.log(surveys);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSurveys());
    }, [dispatch]);

    function renderSurveys() {
        return surveys.map((survey) => (
            <div key={survey.id} class="card indigo darken-4">
                <div class="card-content white-text">
                    <span class="card-title">{survey.title}</span>
                    <p>{survey.body}</p>
                    <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                </div>
                <div className="card-action">
                    <p className="amber-text" style={{ display: 'inline-block', marginRight: '1rem' }}>
                        Yes: {survey.yes}
                    </p>
                    <p className="amber-text" style={{ display: 'inline-block' }}>
                        No: {survey.no}
                    </p>
                </div>
            </div>
        ));
    }

    return <div>{renderSurveys()}</div>;
}
