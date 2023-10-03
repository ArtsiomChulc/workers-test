import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {StateType} from "../../components/employeesListItem/emloyeesSlice";
import {createAppAsyncThunk} from "../../utils/createAppAsyncThunk";
import {workerApi} from "../../components/employeesListItem/worker.api";
import {RootState} from "../../store/store";


const workerSlice = createSlice({
    name: 'workers',
    initialState: [] as StateType[],
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWorkers.fulfilled, (_, action) => {
                return action.payload?.workers
            })
    }
})

export const fetchWorkers = createAsyncThunk(
    'workers/fetchWorkers',
    async (_, thunkAPI) => {
        const response = await workerApi.getWorkers()
        if (response) {
            return {workers: response.data}
        }
        // return {workers: response.data}
    }
)

export const workerReducer = workerSlice.reducer;
export const workerAction = workerSlice.actions;