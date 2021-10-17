import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';

const Expenses = (props) =>
{


  const [selectedYear,setSelectedYear] = useState('2021');

   const expenseFilterHandler=(filteredYear)=>{
    setSelectedYear(filteredYear);
    console.log(filteredYear)
  
    }

    const filteredExpenses = props.expenses.filter(expense => 
    expense.date.getFullYear().toString()===selectedYear)
   
    
    return(
      <div>
  <Card className="expenses">
    <ExpensesFilter selected={selectedYear} onExpenseFilterData={expenseFilterHandler}/>
    <ExpenseList items={filteredExpenses}/>
   </Card>
   </div>
    );

}

export default Expenses