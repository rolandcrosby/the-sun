import $ from 'jquery';

import { APP_CONTAINER_SELECTOR } from '../shared/config'
import calculator from '../shared/calculator';

//console.log(APP_CONTAINER_SELECTOR);

$(function() {
  console.log('hello world :o');
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition( (position) => { 
      console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
      const pos = calculator.position(position.coords.latitude, position.coords.longitude);
      console.log(`Azimuth: ${calculator.degreesFromNorth(pos.azimuth)}°`);
      console.log(`Elevation: ${calculator.degrees(pos.altitude)}°`);
      console.log(pos);
      // $.post(
      //   '/position',
      //   JSON.stringify(
      //     {lat: position.coords.latitude,
      //      lng: position.coords.longitude}
      //   ), (e) => {
      //     console.log(e)
      //   });
    });
  }
});
