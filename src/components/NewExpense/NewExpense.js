import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) =>
{

        
        const [isEditing,setIsediting] = useState(false);

        const saveExpenseHandler = (enteredExpenseData) => {
            const ExpenseData = {
            
            id: Math.random().toString(),
            ...enteredExpenseData
             
            }
            props.onAddExpense(ExpenseData);


        }

        const startEditingHandler = () => {
            setIsediting(true);
        }


        const stopEditingHandler = () => {
            setIsediting(false);
        }

    return(

        <div className='new-expense'>
         {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}

         {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler}/>}


        </div>

    );
}

export default NewExpense;