async function getHotelData() {
    try {
        const response = await fetch('../hotel.json')
        return await response.json() // Return the JSON object
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

let hotelButtons = document.querySelectorAll('main a')
hotelButtons.forEach(button => {
    button.addEventListener('click', hotelInfo)
})

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    document.querySelector('.hotel-listing').classList.add('show')
    
    //displays the picture, hotel name, and address
    document.querySelector("#picture").style.backgroundImage = `url(../images/${hotelChoice.picture})`
    document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
    document.querySelector("#address").textContent = hotelChoice.address

    // Shows the star ratings
    let n = 0;
    document.querySelectorAll('#stars i').forEach(star => {
        n++;
        if (n < hotelChoice.rating) {
            star.className = 'fas fa-star'
        } else {
            star.className = 'far fa-star'
        } 
    })
    document.querySelector('#rating').textContent = `(${hotelChoice.rating})`
    
    // displays about, number of rooms, and types of rooms
    document.querySelector("#aboutHotel").textContent = hotelChoice.about
    document.querySelector("#rooms").textContent = hotelChoice.rooms
    document.querySelector("#types").textContent = hotelChoice.roomTypes

    // Deletes any existing child elements
    let amenities = document.querySelector('#amenities')
    while (amenities.firstChild) {
        amenities.removeChild(amenities.firstChild)
    }

    // Creates the amenities list in the DOM
    hotelChoice.amenities.forEach(amenity => {
        let p = document.createElement('p')
        let i = document.createElement('i')
        let span = document.createElement('span')
        switch (amenity) {
            case 'Gym':
                i.className = 'fas fa-dumbbell'
                span.textContent = 'Gym'
                break;
            case 'Pool':
                i.className = 'fas fa-swimmer'
                span.textContent = 'Pool'
                break;
            case 'Parking': 
                i.className = 'fas fa-car'
                span.textContent = 'Parking'
                break;
            case 'Wifi':
                i.className = 'fas fa-wifi'
                span.textContent = 'Wifi'
                break;
            case 'Pets':
                i.className = 'fas fa-dog'
                span.textContent = 'Pets'
                break;
        }
        p.appendChild(i)
        p.appendChild(span)
        amenities.appendChild(p)
    })
}


