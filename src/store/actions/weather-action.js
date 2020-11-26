import axios from 'axios';

export const WEATHER_LOADING = 'WEATHER_LOADING';  
export const WEATHER_FETCH = 'WEATHER_FETCH';


export const weatherLoading = () => ({
    type: WEATHER_LOADING
})

export const weatherFetch = (weather) => ({
    type: WEATHER_FETCH,
    payload: weather
});



const WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q=__city__&appid=7dd2a0dabe181f6c9336b69f11ff86a2&units=metric&lang=fr"

// Fonction complexe prit en charge par "redux-thunk"
export const weatherSearch = (city) => {
    const url = WEATHER_URL.replace('__city__', city);
    
    // Renvoie d'une fonction 
    return (dispatch) => {

        // Déclancher l'action 'LOADING'
        dispatch(weatherLoading());

        // Requete Ajax via "axios"
        axios.get(url).then(response => {
            const {data} = response;

            const weather = {
                country: data.sys.country,
                city: data.name,
                description: data.weather[0].description,
                temperature: data.main.temp
            }

            // Déclancher l'action 'FETCH'
            dispatch(weatherFetch(weather));
        }).catch(() => {
            // Déclancher l'action 'FETCH'
            dispatch(weatherFetch([]));
        })

    }
}


