import React,{Component} from 'react'
import {connect} from 'react-redux';
import GoogleMaps from '../components/googleMaps'
import Chart from '../components/charts'

class WeatherList extends Component{
    renderWeather(cityData){
        const temp=cityData.list.map((data)=>(data.main.temp*(9/5)-459.67));
        const pressure=cityData.list.map((data)=>data.main.pressure);
        const humidity=cityData.list.map((data)=>data.main.humidity);
        const {lat,lon}=cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <th scope="row">
                    <GoogleMaps lat={lat} lon={lon}/>
                </th>
                <td>
                   <Chart data={temp} color="#0072BB" units="&#8457;"/>
                </td>
                <td>
                    <Chart data={pressure} color="#FF4C3B" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="#FFD034" units="%"/>
                </td>
            </tr>
        )

    }
    render(){

        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (&#8457;)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {
        weather
    }
}
export default connect(mapStateToProps)(WeatherList)