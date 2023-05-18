import { createSelector } from "@reduxjs/toolkit";
import { TState } from "../store"

const getData = (state: TState) => state.userData;

export const getUserEmail = createSelector(getData, (state) => state.email);
export const getUserAccess = createSelector(getData, (state) => state.accessToken);
export const getUserRefresh = createSelector(getData, (state) => state.refreshToken);