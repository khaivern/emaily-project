import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    googleId: null,
    id: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.googleId = action.payload.googleId || false;
            state.id = action.payload._id || false;
        },
        clearUser: (state) => {
            state.googleId = false;
            state.id = false;
        }
    },
});

export const { setUser, clearUser } = authSlice.actions;

export const fetchUser = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                const res = await axios.get('/api/current_user');
                dispatch(setUser(res.data));
            } catch (err) {}
        };

        await sendRequest();
    };
};

export const logoutUser = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                await axios.get('/api/logout');
                dispatch(clearUser());
            } catch (err) {}
        }
        await sendRequest()
    };
};

export default authSlice.reducer;
