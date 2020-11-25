import React from 'react';
import {connect} from 'react-redux';

import {counterIncrement, counterDecrement, counterReset} from '../../store/actions/counter-action';

const CounterButton = (props) => {
    const {incr, decr, reset} = props;

    return (
        <div>
            <button onClick={() => incr(5)}>+5</button>
            <button onClick={() => incr()}>+1</button>
            <button onClick={() => decr()}>-1</button>
            <button onClick={() => decr(5)}>-5</button>
            <br/>
            <button onClick={() => reset()}>Reset</button>
        </div>
    )
}

const mapsDispatchToProps = {
    incr: counterIncrement,
    decr: counterDecrement,
    reset: counterReset
}

export default connect(null, mapsDispatchToProps)(CounterButton);