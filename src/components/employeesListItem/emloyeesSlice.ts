import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {v1} from "uuid";

export type StateType = {
    id: string
    name: string
    salary: number
    increase: boolean
}

export const initialState: StateType[] = [
    // {id: v1(), name: 'Example Name', salary: 300, increase: false},
]
const savedState = localStorage.getItem('localState');
const persistedState = savedState ? JSON.parse(savedState) : initialState;

const employeesSlice = createSlice({
    name: 'increase',
    initialState: persistedState as StateType[],
    reducers: {
        addWorker: (state, action: PayloadAction<{ id: string, name: string, salary: number, increase: boolean }>) => {
            state.push(action.payload)
            localStorage.setItem('localState', JSON.stringify(state))
        },
        toggleIncrease: (state, action: PayloadAction<string>) => {
            const workerId = action.payload;
            const worker = state.find((w) => w.id === workerId);
            if (worker) {
                worker.increase = !worker.increase;
                localStorage.setItem('localState', JSON.stringify(state))
            }
        },
        searchWorkers: (state, action: PayloadAction<string>) => {
            const searchText = action.payload.toLowerCase();
            if (searchText.length === 0) {
                return persistedState; // Возвращаем исходное состояние, если строка поиска пуста
            }
            return state.filter((el) => el.name.toLowerCase().indexOf(searchText) > -1);
        }
    }
})

export const employeesReducer = employeesSlice.reducer
export const {addWorker, toggleIncrease, searchWorkers} = employeesSlice.actions
