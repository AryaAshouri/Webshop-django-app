first_search_time = false;
counter = 0;

function load_search(){
  document.getElementById("location-bar").placeholder = "در حال بارگیری";
  counter = 0;
  if (document.getElementById("location-bar").style.width = "870px"){
    document.getElementById("location-bar").style.width = "0px";
    document.getElementById("location-bar").style.display = "none"

    if (first_search_time == true){
      document.getElementById("search-bar").style.display = "block"
      document.getElementById("search-bar").style.width = "870px"
      document.getElementById("search-bar").classList.add("animation_load");
    }
  }
  else {
    document.getElementById("search-bar").style.display = "block"
    document.getElementById("search-bar").style.width = "870px"
    document.getElementById("search-bar").classList.add("animation_load");
  }
}
function load_location(){

  new_location = ["در حال بارگیری", ". در حال بارگیری", ".. در حال بارگیری", ".. در حال بارگیری", "... درحال بارگیری", "... در حال بارگیری"]
  setInterval(function() {
    place_holder = document.getElementById("location-bar").placeholder
    if (place_holder == "موقعیت مکانی شما یافت نشد" || place_holder == "مرورگر موقعیت مکانی شما را پشتیبانی نمی کند") None;
    else document.getElementById("location-bar").placeholder = new_location[counter];
    if (counter < 4){
      counter += 1;
    }
    else {
      coutner = 0;
    }
  }, 1200);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    document.getElementById("location-bar").placeholder = "مرورگر موقعیت مکانی شما را پشتیبانی نمی کند";
  }

  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // Use reverse geocoding to get the country
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);
    
    geocoder.geocode({ 'latLng': latlng }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          for (var i = 0; i < results[0].address_components.length; i++) {
            var addressType = results[0].address_components[i].types[0];
            if (addressType === "country") {
              var country = results[0].address_components[i].long_name;
              document.getElementById("location-bar").placeholder = country;
              break;
            }
          }
        }
      } else {
        document.getElementById("location-bar").placeholder = "موقعیت مکانی شما یافت نشد"
      }
    });
  }
  function errorCallback(error) {
    document.getElementById("location-bar").placeholder = "موقعیت مکانی شما یافت نشد"
  }

  first_search_time = true;
  if (document.getElementById("search-bar").style.width = "870px"){
    document.getElementById("search-bar").style.width = "0px";
    document.getElementById("search-bar").style.display = "none"

    document.getElementById("location-bar").style.display = "block"
    document.getElementById("location-bar").style.width = "870px"
    document.getElementById("location-bar").classList.add("animation_load");
  }
  else {
    document.getElementById("location-bar").style.display = "block"
    document.getElementById("location-bar").style.width = "870px"
    document.getElementById("location-bar").classList.add("animation_load");
  }
}
AOS.init()
