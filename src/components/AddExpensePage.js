import React from 'react';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensePage=(props)=> (
    <div>
        <h1>This is from my Add Expense component</h1>
        <ExpenseForm onSubmitPropFromParent={(expense)=>{
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }}/>
    </div>
)
export default connect()(AddExpensePage);