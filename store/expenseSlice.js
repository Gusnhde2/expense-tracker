import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.unshift(action.payload);
    },
    deleteExpense: (state, action) => {
      state = state.splice(
        state.findIndex((item) => item.id == action.payload),
        1
      );
    },
    editExpense: (state, action) => {
      console.log(action.payload.id);
      const itemIndex = state.findIndex((item) => item.id == action.payload.id);
      console.log(itemIndex, state[itemIndex]);
      state[itemIndex] = {
        id: action.payload.id,
        amount: parseInt(action.payload.amount),
        title: action.payload.title,
      };
    },
  },
});

export const { addExpense, deleteExpense, editExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
