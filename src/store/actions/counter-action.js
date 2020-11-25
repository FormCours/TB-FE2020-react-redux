export const COUNTER_INCR = 'COUNTER_INCR';
export const COUNTER_DECR = 'COUNTER_DECR';
export const COUNTER_RESET = 'COUNTER_RESET';


export const counterIncrement = (incr=1) => {
    console.log(incr);
    return {
        type: COUNTER_INCR,
        payload: incr
    }
}

export const counterDecrement = (decr=1) => ({
    type: COUNTER_DECR,
    payload: decr
})

export const counterReset = () => ({
    type: COUNTER_RESET
})