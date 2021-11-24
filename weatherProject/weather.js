const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = '64eb0b4f44798174b1717b17b1a9baa7'

function getCurrentWeather(cityId){
    return fetch(`${BASE_URL}/weather?id=${cityId}&appid=${API_KEY}&units=metric`)
        .then(async response => await response.json())
        .catch(error => error)
}

function getFiveDaysWeather(cityId){
    return fetch(`${BASE_URL}/forecast?id=${cityId}&appid=${API_KEY}&units=metric`)
        .then(async response => await response.json())
        .catch(error => error)
}
