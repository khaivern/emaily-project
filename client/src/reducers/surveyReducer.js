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
    },
});

export const { setSurveys } = surveySlice.actions;

export const fetchSurveys = () => {
    return (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.get('/api/surveys');
            dispatch(setSurveys(res.data));
        };
        sendRequest();
    };
};

export default surveySlice.reducer;
