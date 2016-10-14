$(document).ready(function(){

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
    
})








