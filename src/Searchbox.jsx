import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InfoBox from "./InfoBox";

export default function SearchBox() {
  let [location, setLocation] = useState("");
  let [weatherInfo, setWeatherInfo] = useState("");

  let inputHandler = (event) => {
    setLocation(event.target.value);
  };

  let submitHandler = async (event) => {
    event.preventDefault();
    setWeatherInfo(await getWeatherInfo());
    setLocation("");
  };

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${import.meta.env.VITE_WEATHER_API}?q=${location}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    return {
      city:jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
      icon :  jsonResponse.weather[0].icon,
    };
  };

  return (
    <>
      <h2>Enter the location:</h2>
      <form onSubmit={submitHandler}>
        <TextField
          id="searchBox"
          label="City"
          variant="outlined"
          name="SearchBox"
          onChange={inputHandler}
          placeholder="Enter location"
          value={location}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" startIcon={<SearchIcon />}>
          Search
        </Button>
        <InfoBox data={weatherInfo} />
      </form>
    </>
  );
}
