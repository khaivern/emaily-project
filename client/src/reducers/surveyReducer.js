import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    surveys: [],
};

const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        setSurveys(state, action) {
            state.surveys = action.payload;
        },
        removeSurvey(state, action) {
            state.surveys = state.surveys.filter(survey => survey._id !== action.payload);
        }
    },
});

export const { setSurveys, removeSurvey } = surveySlice.actions;

export const fetchSurveys = () => {
    return (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.get('/api/surveys');
            dispatch(setSurveys(res.data));
        };
        sendRequest();
    };
};

export const deleteSurvey = (surveyId) => {
    return (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.delete(`/api/surveys/${surveyId}`);
            console.log(res.data);
            dispatch(removeSurvey(res.data));
        }
        sendRequest();
    }
}

export default surveySlice.reducer;
