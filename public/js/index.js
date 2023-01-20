// maps api search
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

