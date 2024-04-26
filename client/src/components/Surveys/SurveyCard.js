import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import classes from './SurveyCard.module.css';

export default function SurveyCard({ survey }) {
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

    return (
        <div class="card blue-grey darken-3">
            <div class="card-content white-text">
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
        </div>
    );
}
