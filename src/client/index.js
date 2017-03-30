import $ from 'jquery';

import { APP_CONTAINER_SELECTOR } from '../shared/config'
import calculator from '../shared/calculator';

//console.log(APP_CONTAINER_SELECTOR);

$(function() {
  function getHtml(state) {
    if (state.hasOwnProperty("location") && state.location !== null) {
      const pos = calculator.position(state.location.coords.latitude, state.location.coords.longitude)
      return `<p><strong>Position:</strong> (${state.location.coords.latitude}, ${state.location.coords.longitude})<br>
<strong>Azimuth:</strong> ${calculator.degreesFromNorth(pos.azimuth)}°<br>
<strong>Elevation:</strong> ${calculator.degrees(pos.altitude)}°</p>`;
    } else {
      return `<p><i>Looking for position...</i></p>`
    }
  }
  
  var state = {};
  document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = getHtml(state);
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition( (position) => {
      state.location = position;
      document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = getHtml(state);
    });
  }
});


// $.post(
//   '/position',
//   JSON.stringify(
//     {lat: position.coords.latitude,
//      lng: position.coords.longitude}
//   ), (e) => {
//     console.log(e)
//   });