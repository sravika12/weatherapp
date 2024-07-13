import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_URL=
            "https://media.istockphoto.com/id/1029451754/photo/mystic-sunrise.jpg?s=612x612&w=is&k=20&c=5-0RxnQOLQ96H8VLQAVDv_l0CD-884sqMtqiIV_XtjA=";

     const HOT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5t2c2NBK_3C0W7c-IxQSRgrgpUnyMjtBTA&s";
     const COLD_URL="https://wallpapers.com/images/hd/winter-weather-by-the-lake-xuzvfz6y3k0ho01h.jpg";
     const RAIN_URL="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";

   
    return(
        <div className="InfoBox">
            <div className="cardContainer">
              <br></br>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ? RAIN_URL
          :info.temp>15
          ?HOT_URL
          :COLD_URL
        }        
        title="Weather Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity>80
          ? <ThunderstormIcon />
          :info.temp>15
          ? <WbSunnyIcon/>
          : AcUnitIcon
        }       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}</p>
        <p>Min Temp={info.tempMin}&deg;C</p>
        <p>Max Temp={info.tempMax}&deg;C</p>
        <p>
            The weather can be described as <i>{info.weather} </i> and weather feels  like
            {info.feelslike}&deg;C
        </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}