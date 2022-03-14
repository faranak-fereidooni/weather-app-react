import React, { Component } from "react";
import SearchForm from "./components/searchForm";
import { getCity } from "./services/cityService";
import { getWeather } from "./services/weatherService";
import CityContainer from "./components/cityContainer";
import { Route, Routes, Navigate } from "react-router-dom";
import Climate from "./components/climate";
import "./App.css";

class App extends Component {
  state = {
    city: [],
    weather: {},
  };

  handleCitySubmit = async (e) => {
    e.preventDefault();
    const cityInfo = await getCity(e.target.city.value);
    const data = cityInfo.data.map((city) => ({
        EnglishName: city.EnglishName,
        LocalizedName: city.AdministrativeArea.LocalizedName,
        CountryID: city.AdministrativeArea.CountryID,
        Key: city.Key,
      }));
    this.setState({ city: data });
    
  };

  handleClimate = async (cityKey) => {
    const weatherInfo = await getWeather(cityKey);
    const data = {
      IsDayTime: weatherInfo.data[0].IsDayTime,
      EnglishName: this.state.city[0].EnglishName,
      WeatherText: weatherInfo.data[0].WeatherText,
      Temperature: weatherInfo.data[0].Temperature.Metric.Value,
      WeatherIcon: weatherInfo.data[0].WeatherIcon,
    };
    this.setState({ weather: data, city: [] });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-light m-5">Weather App</h1>
        <SearchForm onSubmit={this.handleCitySubmit} />
        <CityContainer
          cityInfo={this.state.city}
          onClick={this.handleClimate}
        />
        <Climate weatherInfo={this.state.weather} />
      </div>
    );
  }
}

export default App;
