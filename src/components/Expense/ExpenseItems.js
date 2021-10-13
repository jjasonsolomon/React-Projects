import ExpenseDate from './ExpenseDate';
import {useState} from 'react'
import './ExpenseItems.css';
import Card from '../UI/Card.js'


const ExpenseItems=(props) =>{

const [title,setTitle] = useState(props.title);
 
const clickHandler = () => {
  setTitle('Updated');
  console.log(title);
} ;
  return (
    
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Click to Change</button>
      </div>
    
    </Card>
  );
}

export default ExpenseItems;