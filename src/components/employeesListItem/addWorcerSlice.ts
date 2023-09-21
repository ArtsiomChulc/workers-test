import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {v1} from "uuid";

export type StateType = {
    id: string
    name: string
    salary: number
    increase: boolean
}

export const initialState: StateType[] = [
    {id: v1(), name: 'John C.', salary: 300, increase: false},
    {id: v1(), name: 'Artsiom C.', salary: 400, increase: false},
    {id: v1(), name: 'Bolda V.', salary: 200, increase: false},
    {id: v1(), name: 'Nurka D.', salary: 400, increase: false},
    {id: v1(), name: 'Kolka B.', salary: 700, increase: false},
]

const increaseSlice = createSlice({
    name: 'increase',
    initialState,
    reducers: {
        addWorker: (state, action: PayloadAction<{ id: string, name: string, salary: number, increase: boolean }>) => {
            state.push(action.payload)
        }
    }
})

export const addWorkerReducer = increaseSlice.reducer
export const {addWorker} = increaseSlice.actions
// export const appReducer = slice.reducer;
// export const appActions = slice.actions;