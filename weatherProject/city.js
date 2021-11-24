function getCities(cityValue){
    return fetch('./city.list.json')
        .then(async response=>{
            const cities = await response.json();
            return cities.filter(city => city.name.toLowerCase().includes(cityValue.toLowerCase()))
        })
        .catch(error => error)
}