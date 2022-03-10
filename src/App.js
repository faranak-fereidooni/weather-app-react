import React, { Component } from "react";
import SearchForm from "./components/searchForm";
import { getCity } from "./services/cityService";
import CityContainer from "./components/cityContainer";
import "./App.css";

class App extends Component {
  state={
    data:[]
  }
  
  handleCitySubmit = async (e) => {
    e.preventDefault();
    const cityInfo = await getCity(e.target.city.value);
    const data = [];
    cityInfo.data.map((city) => {
      data.push({
        EnglishName: city.EnglishName,
        LocalizedName: city.AdministrativeArea.LocalizedName,
        CountryID: city.AdministrativeArea.CountryID,
        Key: city.Key,
      });
    });
    this.setState({data});
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-light m-5">Weather App</h1>
        <SearchForm onSubmit={this.handleCitySubmit} />
        <CityContainer cityInfo={this.state.data} />
      </div>
    );
  }
}

export default App;
