import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterNewYearHandler = (newFilteredYear) => {
    setFilteredYear(newFilteredYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    if (typeof expense.date === "string") {
      const [year, month, day] = expense.date.split("-");
      return year === filteredYear;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        filterYear={filteredYear}
        onFilterNewYear={filterNewYearHandler}
      ></ExpenseFilter>
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}
export default Expenses;
