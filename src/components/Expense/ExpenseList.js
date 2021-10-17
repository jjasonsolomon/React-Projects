
import ExpenseItems from './ExpenseItems'
import './ExpenseItems.css'
const ExpenseList = props => {

    if(props.items.length===0)
    {
        return <h1 ClassName='expenses-list__fallback'>Found no list</h1>
    }
 
      
    

    return(props.items.map(expenses =>
        
        <ul className='expenses-list' key={expenses.id}>
        <ExpenseItems className='expenses-list' key={expenses.id} title={expenses.title} date={expenses.date} amount={expenses.amount} > </ExpenseItems>
        </ul>
        ))

    }

export default ExpenseList