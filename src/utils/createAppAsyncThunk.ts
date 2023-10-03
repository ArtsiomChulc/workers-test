import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState, AppDispatch} from "../store/store";


/**
 * Создает асинхронное санк-криэйтор с использованием `createAsyncThunk` и настраивает типы.
 *
 * @template State - Тип состояния приложения (AppRootStateType).
 * @template Dispatch - Тип диспетчера (AppDispatch).
 * @template RejectValue - Тип значения для отклоненных (rejected) промисов (null | ResponseType).
 *
 * @returns Созданный асинхронный санк-криэйтор.
 */


export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: null | ResponseType;
}>();
