//import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store= configureStore();
console.log('my react app is running')
// const visibleExpenses= getVisibleExpenses(state.expenses,state.filters);

// console.log(visibleExpenses);

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));
   