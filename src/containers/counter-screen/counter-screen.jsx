import React from 'react';
import {connect} from 'react-redux';

const CounterScreen = (props) => {
    const {count} = props;

    return (
        <div>
            <h3>{count}</h3>
        </div>
    );
}

const mapStateToProps = (s) => ({
    count: s.counter.count
})

export default connect(mapStateToProps)(CounterScreen);