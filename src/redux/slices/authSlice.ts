import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserData {
    name: string;
    email: string;
    bio?: string;
    moviesWatched?: number;
    avatar?: string;
}

interface AuthState {
    user: UserData | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserData>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
        updateUser: (state, action: PayloadAction<Partial<UserData>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },
    },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
