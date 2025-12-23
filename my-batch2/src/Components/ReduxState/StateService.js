import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {value: 0},
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

export const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})
export const {incrementByAmount, reset} = counterSlice.actions;
export default counterSlice.reducer;
