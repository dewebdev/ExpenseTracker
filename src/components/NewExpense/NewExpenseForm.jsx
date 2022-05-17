import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  const [enterTheTitle, setEnterTheTitle] = useState("");
  const [enterTheAmount, setEnterTheAmount] = useState("");
  const [enterTheDate, setEnterTheDate] = useState("");

  function handleInputTitleChange(event) {
    setEnterTheTitle(event.target.value);
  }
  function handleInputAmountChange(event) {
    setEnterTheAmount(event.target.value);
  }
  function handleInputDateChange(event) {
    setEnterTheDate(event.target.value);
  }

  function submitHandler(event) {
    // refresh onsubmit of Button To Form Is Prevented
    event.preventDefault();

    const expenseData = {
      title: enterTheTitle,
      amount: enterTheAmount,
      date: new Date(enterTheDate),
    };
    
    props.onSaveExpenseData(expenseData);

    setEnterTheTitle("");
    setEnterTheAmount("");
    setEnterTheDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleInputTitleChange}
            value={enterTheTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleInputAmountChange}
            value={enterTheAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleInputDateChange}
            value={enterTheDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
