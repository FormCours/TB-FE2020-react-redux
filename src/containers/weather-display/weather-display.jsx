import React from 'react';
import {connect} from 'react-redux';

const WeatherDisplay = (props) => {
    const {weather, onLoading} = props;

    if(onLoading) {
        return (
            <h1>Chargement</h1>
        );
    }

    return (
        <div>
            {(weather !== null) ? (
                <>
                    <h2>{weather.city} - {weather.country}</h2>
                    <p>Temperature : {weather.temperature}°c</p>
                    <p>Météo : {weather.description}</p>
                </>
            ) : (
                <h2>Aucunne données</h2>
            )}
        </div>
    );
}

const mapStateToProps = s => ({
    weather: s.weatherData.weather,
    onLoading: s.weatherData.onLoading
})

export default connect(mapStateToProps)(WeatherDisplay);