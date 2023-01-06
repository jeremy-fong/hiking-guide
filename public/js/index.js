const addressEl = document.getElementById("address");
const cityEl = document.getElementById("city");
const stateEl = document.getElementById("state");
const searchEl = document.getElementById("searchBtn");

searchEl.addEventListener('click', searchLoc)

function searchLoc() {
    const addressEl = address.value
    const cityEl = city.value
    const stateEl = state.value
    
    // Geocoding
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '2724789117msh9016856ab94e337p1b3b18jsn5f9f668cd2f1',
            'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
        }
    };
    
    fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${addressEl}&${cityEl}&${stateEl}&language=en`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2724789117msh9016856ab94e337p1b3b18jsn5f9f668cd2f1',
		'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
	}
};

fetch('https://trailapi-trailapi.p.rapidapi.com/activity/?lat=34.1&limit=25&lon=-105.2&q-city_cont=Denver&q-country_cont=Australia&q-state_cont=California&radius=25&q-activities_activity_type_name_eq=hiking', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));