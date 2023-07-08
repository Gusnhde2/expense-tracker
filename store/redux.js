import { configureStore } from "@reduxjs/toolkit";
import addExpenseReducer from "./expenseSlice";

const store = configureStore({
  reducer: { expenses: addExpenseReducer },
});

export default store;
