import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>
{


        const saveExpenseHandler = (enteredExpenseData) => {
            const ExpenseData = {
             ...enteredExpenseData,
             id: Math.random().toString()
             
            }
            props.onAddExpense(ExpenseData);


        }


    

    return(

        <div>
        
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>

        </div>

        </div>

    );
}

export default NewExpense;