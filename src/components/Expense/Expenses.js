import ExpenseItems from './ExpenseItems'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) =>
{

  const [selectedYear,setSelectedYear] = useState('2021');

   const expenseFilterHandler=(filteredYear)=>{
    console.log(filteredYear)
    setSelectedYear(filteredYear)

  }

    return(

        
  <Card className="expenses">

    <div>
      
      
    
    <ExpensesFilter selected={selectedYear} onExpenseFilterData={expenseFilterHandler}/>
    {  
     props.expenses.map(expenses =>
    <ExpenseItems key={expenses.id} title={expenses.title} date={expenses.date} amount={expenses.amount} > </ExpenseItems>
    )}
    
   </div>
   </Card>
    );


}


export default Expenses