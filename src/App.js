import React, {Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_Key = "51330f5d5d6f4c6b74d5fb0f0d8d0d9a";
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {

  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_Key}`);
    const data = await api.json();
    console.log(data);
    if(city && country){
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }
    else{
      this.setState({
        tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter Your Data'
      })
    }
    
  }

  render(){
    return (
      <div className="wrapper">
        <div className='form-container'>
        <Form getWeather={this.getWeather}/>
        <Weather data={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
