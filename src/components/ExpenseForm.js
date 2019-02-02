import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

 export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description:props.expense? props.expense.description:'',
            note:props.expense? props.expense.note:'',
            amount:props.expense? (props.expense.amount/100).toString():'',
            createdAt:props.expense? moment(props.expense.createdAt):moment(),
            calenderFocused:false,
            error:''
        };
    }
    onChangeTextbox=(e)=>{
        const myDescription=e.target.value;
        this.setState(()=>{
            return {
                description:myDescription
            }
        })
    }
    onTextAreaChange=(e)=>{
        const myNote=e.target.value;
        this.setState(()=>{
            return{
                note:myNote
            }
        })
    }
    // Make regular expression from regex101.com
    onAmountChange=(e)=>{
        const amt=e.target.value;
        if(amt.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount:amt}))
        }
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
        this.setState(()=>{
            return {createdAt}
        })}
    }
    onFocusChange=({focused})=>{
        this.setState(()=>{
            return {calenderFocused:focused}
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){

            this.setState(()=>{
                return {
                    error:'Error: Please check values you have entered'
                }
            })
            console.log('ERROR !!')
        }
        else{
            this.setState(()=>{
                return{
                    error:''
                }
            })
            this.props.onSubmitPropFromParent({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            })         
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <h1>My Expense Form </h1>
                    <input type='text' placeholder='Description' autoFocus value={this.state.description} onChange={this.onChangeTextbox}/>
                    <input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange}/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day)=>{return false}}
                    />
                    <textarea placeholder='Add a note for your expense (optional)' value={this.state.note} onChange={this.onTextAreaChange}/>
                    <button>Add Expenses</button>
                </form>
            </div>
        )
    }
}