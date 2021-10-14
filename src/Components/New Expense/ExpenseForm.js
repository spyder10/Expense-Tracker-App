import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  let titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  let dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  let amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  let submitHandler = (event) => {
    event.preventDefault();

    let enteredExpense = {
      title: enteredTitle,
      date: enteredDate,
      amount: enteredAmount,
    };

    props.onSaveNewExpense(enteredExpense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.2"
            step="0.01"
            value={enteredAmount}
          ></input>
        </div>
        <button className="new-expense__actions" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}
export default ExpenseForm;
