import { combineReducers } from 'redux';
import incomeReducer from './income-reducer';
import budgetReducer from './budget-reducer';

const reducer = combineReducers({
    incomes: incomeReducer,
    budgets: budgetReducer,
})

export default reducer;