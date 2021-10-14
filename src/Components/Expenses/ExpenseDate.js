import "./ExpenseDate.css";

function ExpenseDate(props) {
  if (typeof props.date === "string") {
    const [year, month, day] = props.date.split("-");
    let months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    return (
      <div className="expense-date">
        <div className="expense-date__month">{months[month-1]}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    );
  } else {
    return (
      <div className="expense-date">
        <div className="expense-date__month">
          {props.date.toLocaleString("en-US", { month: "long" })}
        </div>
        <div className="expense-date__day">
          {props.date.toLocaleString("en-US", { day: "2-digit" })}
        </div>
        <div className="expense-date__year">{props.date.getFullYear()}</div>
      </div>
    );
  }
}
export default ExpenseDate;
