import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01N": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02N": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03N": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04N": "CLOUDY",
    "09d": "RAIN",
    "09N": "RAIN",
    "10d": "RAIN",
    "10N": "RAIN",
    "11d": "RAIN",
    "11N": "RAIN",
    "13d": "SNOW",
    "13N": "SNOW",
    "50d": "FOG",
    "50N": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={55}
      animate={true}
    />
  );
}
