import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {employeesReducer} from "../components/employeesListItem/emloyeesSlice";
import {workerReducer} from "../components/employeesList/workerSlice";

export const rootReducer = combineReducers({
    state: employeesReducer,
    workers: workerReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

// Выведите типы RootState и AppDispatch из самого магазина.
export type RootState = ReturnType<typeof store.getState>

// Предполагаемый тип: {сообщения: PostsState, комментарии: CommentsState, пользователи: UsersState}
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;