$(document).ready(function() {
    //NEWS API 
    $.get("https://json-data.herokuapp.com/restaurant/news/1",function(news) {
        console.log(news)
        var newsContent = `
            news.title
        `
        console.log(newsContent)

    })

    //SPECIALS MENU API
    var b = $.get("https://json-data.herokuapp.com/restaurant/special/1", function(specials) {
        console.log(specials)
    })

    //ENTRES, APPETIZERS, ALA CARTE MENU ITEMS API
    var c = $.get("https://json-data.herokuapp.com/restaurant/menu/1", function(menuItems) {
        console.log(menuItems)
    })

})



function initMap() {
        //coordinates for address. from www.gps-coordinates.net
        var coordinates = {
            lat: 36.1583864,
            lng: -115.1525016
        }
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17,
            center: coordinates,
            styles: [
                {    
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{visibility: 'off'}]
                }
            ]
        })

        var contentString = `
            <h2>Lagoon Valley</h2>
            <p>Las Vegas' premier find dining seafood experience. Enjoy the freshest seafood the Valley has to offer.</p>
            <div><b>insert Lagoon Valley Logo here</b></div>
        `

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 1000
        });

        var marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                title: 'Lagoon Valley'
        })

        marker.addListener('click', function() {
        infowindow.open(map, marker)
        
        })
}