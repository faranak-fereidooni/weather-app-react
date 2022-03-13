import React from "react";

const CityContainer = (props) => {
  const { cityInfo, onClick } = props;
  if (!cityInfo || cityInfo.length === 0) return null;

  return (
    <div className="list-group">
      {cityInfo.map((city) => (
        <a
          key={Math.random()}
          className="list-group-item list-group-item-action"
          onClick={() => onClick(city.Key)}
        >
          {city.EnglishName + "," + city.LocalizedName + "," + city.CountryID}
        </a>
      ))}
    </div>
  );
};

export default CityContainer;
