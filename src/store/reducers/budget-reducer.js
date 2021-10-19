import { budget } from '../placeholders';

const reducer = (state=budget, actions) => {
    const {type, payload} = actions;

    if(type === 'newBudget') {
        return {...state, payload}
    }

    return state;
}

export default reducer;