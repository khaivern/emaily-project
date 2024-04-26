import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoSurveys from '../../assets/no-surveys.jpg';
import { fetchSurveys } from '../../reducers/surveyReducer';
import SurveyCard from './SurveyCard';
import classes from './SurveyList.module.css';

export default function SurveyList() {
    const { surveys } = useSelector((state) => state.surveys);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSurveys());
    }, [dispatch]);

    if (surveys.length === 0) {
        return (
            <div className={classes['no-surveys']}>
                <div className={classes['img-container']}>
                    <img src={NoSurveys} alt="No surveys created yet" />
                </div>
                <h4>No surveys created yet...</h4>
            </div>
        );
    }

    return (
        <div className={classes.surveys}>
            {surveys.map((survey) => (
                <SurveyCard key={survey.id} survey={survey} />
            ))}
        </div>
    );
}
