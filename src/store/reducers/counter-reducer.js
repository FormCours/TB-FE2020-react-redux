const { COUNTER_INCR, COUNTER_DECR, COUNTER_RESET } = require("../actions/counter-action");

const initialState = {
    count: 0,
    message: 'test'
};


const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case COUNTER_INCR:
            return {
                ...state,
                count: state.count + action.payload
            }
        case COUNTER_DECR:
            return {
                ...state,
                count: state.count - action.payload
            }
        case COUNTER_RESET:
            return initialState;
        default:
            return state;
    }
}

export default counterReducer;