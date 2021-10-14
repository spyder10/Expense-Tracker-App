import ExpenseForm from './ExpenseForm'; 
import './NewExpense.css';

function NewExpense(props){

    let saveNewExpenseHandler = (enteredExpense) => {
        props.onSaveNewExpense(enteredExpense);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveNewExpense={saveNewExpenseHandler}></ExpenseForm>
    </div>

}
export default NewExpense;