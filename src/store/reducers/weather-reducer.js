const { WEATHER_LOADING, WEATHER_FETCH } = require("../actions/weather-action")


const initialState = {
    weather: null,
    onLoading: false
}

const weatherReducer = (state= initialState, action) => {

    switch(action.type) {
        case WEATHER_LOADING:
            return {
                weather: null,
                onLoading: true
            };
        case WEATHER_FETCH:
            return {
                weather: action.payload,
                onLoading: false
            };
        default:
            return state;
    }
}

export default weatherReducer;