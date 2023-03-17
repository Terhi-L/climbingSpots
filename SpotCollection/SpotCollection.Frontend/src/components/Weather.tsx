import { FC, useEffect, useState } from "react";
import { ILocation } from "../interfaces";

type Locationprops = {
  locations: ILocation;
};

export const Weather: FC<Locationprops> = ({ locations }) => {
  const [newTemperature, setNewTemperature] = useState<number>();
  const [newSky, setNewSky] = useState<string>("");
  const [skyEmoji, setSkyEmoji] = useState<string>("");
  const [display, setDisplay] = useState<boolean>(false);

  const getWeather = async () => {
    const apiKey = "e3dfb7191ef6138f7a6e690ea1f91607";
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locations.name}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.main.temp);
        setNewTemperature(Math.round(data.main.temp));
        let sky: string = data.weather[0].description;
        sky = sky.charAt(0).toUpperCase() + sky.slice(1);
        setNewSky(sky);
        emojis(JSON.stringify(data));
      });
    if (weather === null) {
      return;
    }
    setDisplay(true);
    return weather;
  };

  const emojis = (data : string) => {
    const foundData = JSON.parse(data);
    let sky = foundData.weather[0].main;
    if (sky === "Clear") {
      setSkyEmoji("☀️");
    } else if (sky === "Clouds") {
        setSkyEmoji("🌤");
    } else if (sky === "Drizzle") {
        setSkyEmoji("🌨");
    } else if (sky === "Rain") {
        setSkyEmoji("🌧");
    } else if (sky === "Thunderstorm") {
        setSkyEmoji("⚡️");
    } else if (sky === "Snow") {
        setSkyEmoji("❄️");
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      {display && (
        <p>
          <span className="title">Current weather:</span> {newTemperature}°C
          degrees celsius. {skyEmoji} {newSky}
          <br />
        </p>
      )}
    </>
  );
};
