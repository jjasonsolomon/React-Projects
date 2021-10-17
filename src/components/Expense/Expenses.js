import ExpenseItems from './ExpenseItems'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) =>
{


  const [selectedYear,setSelectedYear] = useState('2021');

   const expenseFilterHandler=(filteredYear)=>{
    setSelectedYear(filteredYear);
    console.log(filteredYear)
  
    }

    const filteredExpenses = props.expenses.filter(expense => 
    expense.date.getFullYear().toString()===selectedYear)
   
    let expenseContent = <p>No Items Found.</p>;

    if(filteredExpenses.length>0)
    {
      expenseContent=filteredExpenses.map(expenses =>
      
        
        <ExpenseItems key={expenses.id} title={expenses.title} date={expenses.date} amount={expenses.amount} > </ExpenseItems>
        
        )
    }
    return(

        
  <Card className="expenses">

    <div>
    

    <ExpensesFilter selected={selectedYear} onExpenseFilterData={expenseFilterHandler}/>
    
   </div>
   {expenseContent} 


   </Card>
    );


}


export default Expenses