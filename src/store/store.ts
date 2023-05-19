import { configureStore } from "@reduxjs/toolkit";
import { userDataNameReducer, userDataReducer } from "./userData";

export const store = configureStore({
    reducer: {
        [userDataNameReducer]: userDataReducer
    },
    devTools: true,
    preloadedState: {
        userData: {
            email: String(localStorage.getItem('email')),
            accessToken: String(localStorage.getItem('accessToken')),
            refreshToken: String(localStorage.getItem('refreshToken'))
        }
    }
});

export type TState=ReturnType<typeof store.getState>