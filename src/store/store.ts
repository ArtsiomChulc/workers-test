import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {addWorkerReducer} from "../components/employeesListItem/addWorcerSlice";

export const rootReducer = combineReducers({
    addWorker: addWorkerReducer
})

export const store = configureStore({
    reducer: rootReducer
})

// Выведите типы RootState и AppDispatch из самого магазина.
export type RootState = ReturnType<typeof store.getState>

// Предполагаемый тип: {сообщения: PostsState, комментарии: CommentsState, пользователи: UsersState}
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;