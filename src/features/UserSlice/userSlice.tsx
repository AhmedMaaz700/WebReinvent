import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    email: string;
    loggedIn: boolean;
}

const initialState: UserState = {
    email: '',
    loggedIn: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ email: string }>) => {
            console.log(action)
            state.email = action.payload.email;
            state.loggedIn = true;
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
