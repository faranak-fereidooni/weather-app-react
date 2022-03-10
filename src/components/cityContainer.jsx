import React from "react";

const CityContainer = (props) => {
  const { cityInfo } = props;
  console.log(cityInfo);
  return (
    <div className="list-group">
      {cityInfo.map((city) => (
        <a className="list-group-item list-group-item-action">
          {city.EnglishName + "," + city.LocalizedName + "," + city.CountryID}
        </a>
      ))}
    </div>
  );
};

export default CityContainer;
