import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSurvey } from '../../reducers/surveyReducer';
import classes from './SurveyCard.module.css';

export default function SurveyCard({ survey }) {
    const dispatch = useDispatch();

    const formattedDate = new Date(survey.dateSent).toLocaleDateString('en-GB');

    const hasNoFeedback = !survey.yes && !survey.no;

    useEffect(() => {
        const ctx = document.getElementById(survey._id);
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Yes', 'No'],
                datasets: [{ data: [survey.yes, survey.no], backgroundColor: ['#f0e68c', '#f48fb1'] }],
            },
        });
    }, [survey._id, survey.yes, survey.no]);

    const deleteSurveyHandler = () => {
        dispatch(deleteSurvey(survey._id));
    }

    return (
        <div className={`card blue-grey darken-3 ${classes.card}`}>
            <div className="card-content white-text">
                <p className="right">
                    Created At:
                    <b className={classes.date}>{formattedDate}</b>
                </p>
                <h5 className={classes.title}>{survey.title}</h5>
                <h6>{survey.subject}</h6>
                <p>{survey.body}</p>
            </div>
            <div className="card-action">
                <div className={classes.canvas}>
                    <canvas id={survey._id}></canvas>
                    {hasNoFeedback && <p className={classes['no-feedback']}>No feedback received yet</p>}
                </div>
            </div>
            <div className={classes['delete-row']}>
                <button className="grey darken-1 btn-small" onClick={deleteSurveyHandler}>
                    <i className="material-icons left">delete</i>
                    Delete
                </button>
            </div>
        </div>
    );
}
