import { incomes } from '../placeholders';

const reducer = (state=incomes, actions) => {
    const {type, payload} = actions;
    if(type === 'newIncomeSource') {
        return {...state, payload}
    }

    return state

}

export default reducer;