import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ data }) {
  let iconImg = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  console.log(iconImg);
  return (
    <div className="InfoBox" >
      <h1>{data.city}</h1>
      <Card sx={{ width: 500,backgroundColor:"#454443", color:"white"}}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://plus.unsplash.com/premium_photo-1668017178993-4c8fc9f59872?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {data.weather} <img src={iconImg} style={{width:"15%",marginBottom:"-5%"}} alt="weatherIcon" />
          </Typography>
          <Typography
            variant="body2" 
            component={"span"}
          >
            <p>Temperature = {data.temp}&deg;C</p>
            <p>Humidity = {data.humidity}%</p>
            <p>Min Temp. = {data.tempMin}&deg;C</p>
            <p>Max Temp. = {data.tempMax}&deg;C</p>
            <p>The temp. feels like {data.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
