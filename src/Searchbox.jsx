import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


export default function SeacrhBox() {
  let [location, setLocation] = useState("");

  let inputHandler = (event) => {
    setLocation(event.target.value);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    console.log(location);
    setLocation("");
  };

  return (
    <>
      <h2>Enter the location:</h2>
      <form onSubmit={submitHandler}>
      <TextField id="searchBox" label="City" variant="outlined" name="SecrchBox"
          onChange={inputHandler}
          placeholder="Enter location"
          value={location}
        />
        <br />
        <br />
        <Button variant="contained" startIcon={<SearchIcon />}>Search for weather</Button>
      </form>
    </>
  );
}
