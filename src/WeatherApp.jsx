import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import  {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city:"Wonderland",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

   let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
   };
    return(
        <div >
            <h2 style={{marginLeft:"600px",
                fontSize:"30px",
                color:"black",
                backgroundColor:"whitesmoke",
                textAlign:"center",
               borderRadius:"10px",
             }}>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}