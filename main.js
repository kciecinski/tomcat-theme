document.addEventListener("DOMContentLoaded", function(event) {
  $('.owl-carousel').owlCarousel({
  loop:true,
  items: 3,
  margin:10,
})
document.addEventListener("scroll",function(){
  let rect = document.getElementsByTagName("main")[0].getBoundingClientRect()
  if(rect.y <= 0){
    document.getElementById("navbar").style.backgroundColor = "rgba(25, 42, 86, 1)"
  }else{
    document.getElementById("navbar").style.backgroundColor = "rgba(25, 42, 86, 0.3)"
  }
})
})
function myMap() {
  var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.12),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.HYBRID
  }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
