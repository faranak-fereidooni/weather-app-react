import config from "../config.json";
import http from "./httpService";

export function getWeather(cityKey){
    return http.get(config.weatherUrl+"/"+cityKey,{
        params:{apikey:config.key},
    })
}