import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setUser } from './authReducer';

const initialState = {
    form: {}
};

const formSlice = createSlice({
    name: 'surveyFormData',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.form = action.payload;
        },
        clearFormData: (state, action) => {
            state.form = {};
        }
    },
});

export const { setFormData, clearFormData } = formSlice.actions;

export const submitSurvey = (formData, navigate) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.post('/api/surveys', { ...formData });
            navigate('/surveys');
            dispatch(setUser(res.data));
            dispatch(clearFormData);
        }

        await sendRequest();
    }
}

export default formSlice.reducer;
