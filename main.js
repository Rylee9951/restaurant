$(document).ready(function(){

var carouselImages = [
    {
      image_url: "http://cdn2.viceroyhotelgroup.com/~/media//viceroy_hotels_and_resorts/santamonica/Images/Large-1280x720/vsm-night-event-1280x720.ashx",
    },
    {
      image_url: "http://www.flauminc.com/size/1280x720/server15-cdn/2016/05/20/best-restaurant-design-modern-restaurant-bar-design-3276ff1e1c2bd326.jpg",
    },
    {
      image_url:"http://www.caribbeanluxuryclub.com/wp-content/uploads/2015/11/va-food-coba-104-1280x720.jpg" ,
    },
     { 
     	image_url: "http://www.viceroyhotelsandresorts.com/~/media/viceroy_hotels_and_resorts/snowmass/Images/Large-1280x720/vs_8k_dining_5222_1280x720.ashx",
     },
     {
        image_url:"http://www.lemairerestaurant.com/images/photos/photo-gallery/salmon.jpg"
     },
     {
     	image_url:"http://www.fourseasons.com/content/dam/fourseasons/images/web/BEV/BEV_535_aspect16x9.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
     },
     {
     	image_url:"http://www.fourseasons.com/content/dam/fourseasons/images/web/VGS/VGS_458_aspect16x9.jpg"
     }
  ];

var htmlStr = ""
  carouselImages.forEach(function(item,i){
     htmlStr += `
       <div id="image${i}" class="pics">
          <div><img src="${item.image_url}" /></div>
           <div class= "prev">&#8656</div>
           <div class= "next">&#8658</div>
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
    
})








