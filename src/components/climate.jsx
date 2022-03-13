import React from "react";
import day from "../img/day.svg";
import night from "../img/day.svg";
import icons from "../img/icons/index.json";
import _ from "lodash";

const Climate = (props) => {
  const { weatherInfo } = props;
  if (_.isEmpty(weatherInfo)) return null;

  const timeSrc = weatherInfo.IsDayTime ? day : night;
  return (
    <div className="card lg-shadow rounded">
      <img src={timeSrc} className="time card-img-top" />

      <div className="icon bg-light mx-auto text-center">
        {icons &&
          icons
            .filter((i) => i.id === weatherInfo.WeatherIcon)
            .map((icon) => (
              <img key={icon.id} src={icon.icon} className="icons" alt="" />
            ))}
      </div>

      <div className="text-muted text-uppercase text-center details">
        <h5 className="my-3">{weatherInfo.EnglishName}</h5>
        <div className="my-3">{weatherInfo.WeatherText}</div>
        <div className="display-4 my-4">
          <span>{weatherInfo.Temperature}</span>
          <span>&deg;C</span>
        </div>
      </div>
    </div>
  );
};

export default Climate;
