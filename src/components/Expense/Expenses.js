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
    <ExpenseItems date={props.expenses[0].date} amount={props.expenses[0].amount} title={props.expenses[0].title}> </ExpenseItems>
    <ExpenseItems date={props.expenses[1].date} amount={props.expenses[1].amount} title={props.expenses[1].title}> </ExpenseItems>
    <ExpenseItems date={props.expenses[2].date} amount={props.expenses[2].amount} title={props.expenses[2].title}> </ExpenseItems>
    <ExpenseItems date={props.expenses[3].date} amount={props.expenses[3].amount} title={props.expenses[3].title}> </ExpenseItems>


   </div>
   </Card>
    );


}


export default Expenses