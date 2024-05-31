const State_initial = 'USD';
const changeCurrency = (state = State_initial, action) => {
    switch (action.type) {
        case 'CURRENCY':
            return action.payload;

        default:
            return state;
    }
}

export default changeCurrency;