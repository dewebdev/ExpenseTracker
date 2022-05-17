import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_DUMMY_EXPENSES = [];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_DUMMY_EXPENSES);
  function addExpenseHandler(expense) {
    setExpenses([expense, ...expenses]);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
