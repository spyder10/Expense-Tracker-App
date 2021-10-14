import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/New Expense/NewExpense";
const DummyExpenses = [
  {
    title: "Car Insurance",
    amount: 5000,
    date: new Date(2021, 10, 13),
  },
  {
    title: "Life Insurance",
    amount: 6000,
    date: new Date(2020, 9, 13),
  },
  {
    title: "Bank Loan",
    amount: 42000,
    date: new Date(2019, 9, 13),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);
  const saveNewExpenseHandler = (enteredExpense) => {
    setExpenses((prevExpenses) => {
      return [enteredExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSaveNewExpense={saveNewExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
