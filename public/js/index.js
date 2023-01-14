// const addressEl = document.getElementById("address");
// const cityEl = document.getElementById("city");
// const stateEl = document.getElementById("state");
// const searchEl = document.getElementById("searchBtn");

// searchEl.addEventListener('click', searchLoc)

// function searchLoc() {
//     const addressEl = address.value
//     const cityEl = city.value
//     const stateEl = state.value
//     // Geocoding
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': process.env.MAPAPIKEY,
//             'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
//         }
//     };
    
//     console.log(cityEl, stateEl)
//     fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${addressEl}&${cityEl}&${stateEl}&language=en`, options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': process.env.TRAILAPIKEY,
// 		'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
// 	}
// };

// fetch('https://trailapi-trailapi.p.rapidapi.com/activity/?lat=34.1&limit=25&lon=-105.2&q-city_cont=Denver&q-country_cont=Australia&q-state_cont=California&radius=25&q-activities_activity_type_name_eq=hiking', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const searchElement = document.querySelector('#location');
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    if (place == null) return
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()
    fetch('/location', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ latitude: latitude, longitude: longitude })
    }).then(res => res.json()).then(data => {
        setLocationData(data, place.formatted_address)
    })
})

