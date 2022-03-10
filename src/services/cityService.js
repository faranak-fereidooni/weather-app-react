import config from "../config.json";
import http from "./httpService";

export function getCity(cityName){
    return http.get(config.cityUrl,{
        params:{apikey:config.key , q:cityName},
    })
}