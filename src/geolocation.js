import { get } from 'axios';

const API_KEY = 'AIzaSyAIT4MRjZ2uU7r-law99yc3a5Bhi7rA2v4';

export const getCurrentCoords = () => 
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve);
  });

export const getCurrentCityName = ({ latitude, longitude }) =>
  get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`)
    .then(response => response.data.results[0].address_components[2].long_name)
    .catch(error => console.log(error))
