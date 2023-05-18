import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUser {
    email: string,
    accessToken: string,
    refreshToken: string
} 

const slice = createSlice({
    name: 'userData', 
    initialState: {email: '', accessToken: '', refreshToken: ''}, 
    reducers: {
        setUserData(state, {type, payload}:PayloadAction<IUser>) {
            return {...state, ...payload}
        }
    }
})

export const {reducer: userDataReducer, name: userDataNameReducer, actions} = slice;
export const { setUserData } = actions;