import { combineReducers } from 'redux';
import WeatherReducer from './reducer_fetchWeather'
const rootReducer = combineReducers({
 weather:WeatherReducer
});

export default rootReducer;
