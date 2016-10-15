$(document).ready(function() {
	//NEWS API 
	$.get("https://json-data.herokuapp.com/restaurant/news/1",function(news) {
		console.log(news)
		var newsContent = `
		      <div id="newsTitle"><p>${news.title}</p></div>
				<div id="news_datePublished">${news.date_published}</div>
				<div id="newsStory">${news.post}</div>
		`
		$("#tab4").html(newsContent)

	})

	//SPECIALS MENU API
	var b = $.get("https://json-data.herokuapp.com/restaurant/special/1", function(specials) {
		console.log(specials)
		var specials = `
			#${specials.id}. ${specials.menu_item_id}................price
		`
		$(".specialsMenu").html(specials)
	})

	//ENTRES, APPETIZERS, ALA CARTE MENU ITEMS API
	var c = $.get("https://json-data.herokuapp.com/restaurant/menu/1", function(menuItems) {
		console.log(menuItems)
	})

var carouselImages = [
    {
      image_url: "http://www.wedonyc.net/resolution/1280x720/cdn-images/2016/01/11/small-restaurant-interior-design-ideas-classic-restaurant-interior-design-ideas-restaurant-designs.jpg",
    },
    {
      image_url: "https://wallpaperscraft.com/image/restaurant_cafe_appliances_tables_chairs_interior_design_39216_1280x720.jpg",
    },
    {
      image_url: "http://www.viceroyhotelsandresorts.com/~/media/viceroy_hotels_and_resorts/zeppelin/Images/Large-1280x720/zep-cafe-seating-1280x720.ashx",
    },
     { image_url:"http://www.wedonyc.net/resolution/1280x720/cdn-images/2015/10/20/x--px-interior-photo-burj-al-arab-dubai-best-restaurant-dell-laptops.jpg" ,
     }
  ];

var htmlStr = ""
  carouselImages.forEach(function(item,i){
     htmlStr += `
       <div id="image${i}" class="pics">
          <div><img src="${item.image_url}" /></div>
           <div class= "prev">&laquo</div>
           <div class= "next">&raquo</div>
       </div>
       `
      
  })

     $(".restaurant").html(htmlStr)
     $(".pics:first-child").addClass("current opacity")
     
     



    $(".next").on('click', function(){
    
        var current = $(".current").attr("id").substr(5)
        var nextIndex = Number(current) + 1;
  
        if(nextIndex === carouselImages.length){
        nextIndex = 0
        }
     
      
       $(`#image${current}`).removeClass("current opacity")
       $(`#image${nextIndex}`).addClass("current opacity")
       
    })
    $(".prev").on('click', function(){
    
        var current = $(".current").attr("id").substr(5)
        var prevIndex = Number(current) - 1;
  
        if(prevIndex === -1){
        prevIndex = carouselImages.length-1
        }
     
      
     $(`#image${current}`).removeClass("current opacity")
     $(`#image${prevIndex}`).addClass("current opacity")
     
    })
    $(".tabs").tabIt({position:'right'})

	$(".tabs").show()

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