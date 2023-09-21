import { configureStore } from '@reduxjs/toolkit'
import {incReducer} from "../components/employeesListItem/slice";

export const store = configureStore({
    reducer: {
        increase: incReducer
    },
})

// Выведите типы RootState и AppDispatch из самого магазина.
export type RootState = ReturnType<typeof store.getState>

// Предполагаемый тип: {сообщения: PostsState, комментарии: CommentsState, пользователи: UsersState}
export type AppDispatch = typeof store.dispatch

// import {AnyAction, combineReducers} from "redux";
// import {configureStore} from "@reduxjs/toolkit";
// import {incReducer} from "../components/employeesListItem/slice";
//
// const rootReducer = combineReducers({
//     increase:incReducer
// });
//
// export const store = configureStore({
//     reducer: rootReducer,
// });
//
// export type AppDispatch = typeof store.dispatch
//
// // export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

// @ts-ignore
window.store = store;