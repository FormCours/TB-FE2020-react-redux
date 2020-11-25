import React from 'react';
import {connect} from 'react-redux';
import SearchBar from '../../components/search-bar/search-bar';
import {weatherSearch} from '../../store/actions/weather-action';


const WeatherSearch = (props) => {
    const {weatherSearch} = props;

    return (
        <SearchBar onSearch={weatherSearch} />
    )
}

const mapDispatchToProps = {
    weatherSearch
} 

export default connect(null, mapDispatchToProps)(WeatherSearch);



// const mapDispatchToProps = {
//     onSearch: weatherSearch
// } 

// export default connect(null, mapDispatchToProps)(SearchBar);