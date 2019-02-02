import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../actions/expenses';

const EditExpensePage=(props)=>{
    console.log(props)
    return (
        <div>
            <ExpenseForm expense={props.expense} onSubmit={(expenseReceivedFromChild)=>{
                props.dispatch(editExpense(props.expense.id,expenseReceivedFromChild));
                props.history.push('/');
                console.log('Edited Data(props.expense.id,expenseReceivedFromChild) :', expenseReceivedFromChild)
            }}/>
            <button onClick={()=>{
                
                props.dispatch(removeExpense({id:props.expense.id}));
                props.history.push('/');
            }}>Remove</button>            
        </div>
    )
}
const mapStateToProps=(state, props)=>{
    return {
        expense:state.expenses.find((myExpense)=>{
            return myExpense.id===props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(EditExpensePage);