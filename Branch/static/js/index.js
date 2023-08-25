AOS.init();
var first_time_lage = 0;
var second_time_lage = 0;
function load_search(){
  if (document.getElementById("location-text").style.width != "0px"){
    document.getElementById("location-text").style.width = "0px";
    document.getElementById("location-text").style.height = "0px";
    document.getElementById("location-text").style.paddingLeft = "0px";
    document.getElementById("location-text").style.paddingRight = "0px";
    document.getElementById("location-text").style.marginLeft = "0px";
    document.getElementById("location-text").style.fontSize = "0px";

    document.getElementById("logo-bar").style.marginRight = "450px";
    document.getElementById("profile-bar").style.marginLeft = "450px";

    if (document.getElementById("search-bar").style.width == "0px"){
      document.getElementById("search-bar").style.width = "120px";
      document.getElementById("search-bar").style.height = "60px";
      document.getElementById("search-bar").style.paddingLeft = "30px";
      document.getElementById("search-bar").style.paddingRight = "30px";
      document.getElementById("search-bar").style.marginLeft = "10px";

      document.getElementById("logo-bar").style.marginRight = "10px";
      document.getElementById("profile-bar").style.marginLeft = "10px";
    }
    else {
      if (first_time_lage == 0){
        document.getElementById("search-bar").style.width = "120px";
        document.getElementById("search-bar").style.height = "60px";
        document.getElementById("search-bar").style.paddingLeft = "30px";
        document.getElementById("search-bar").style.paddingRight = "30px";
        document.getElementById("search-bar").style.marginLeft = "10px";
        first_time_lage += 1;

        document.getElementById("logo-bar").style.marginRight = "10px";
        document.getElementById("profile-bar").style.marginLeft = "10px";
      }
      else {
        document.getElementById("search-bar").style.width = "0px";
        document.getElementById("search-bar").style.height = "0px";
        document.getElementById("search-bar").style.paddingLeft = "0px";
        document.getElementById("search-bar").style.paddingRight = "0px";
        document.getElementById("search-bar").style.marginLeft = "0px";

        document.getElementById("logo-bar").style.marginRight = "450px";
        document.getElementById("profile-bar").style.marginLeft = "450px";
      }
    }
  }
  else {
    if (document.getElementById("search-bar").style.width == "0px"){
      document.getElementById("search-bar").style.width = "120px";
      document.getElementById("search-bar").style.height = "60px";
      document.getElementById("search-bar").style.paddingLeft = "30px";
      document.getElementById("search-bar").style.paddingRight = "30px";
      document.getElementById("search-bar").style.marginLeft = "10px";

      document.getElementById("logo-bar").style.marginRight = "10px";
      document.getElementById("profile-bar").style.marginLeft = "10px";
    }
    else {
      if (first_time_lage == 0){
        document.getElementById("search-bar").style.width = "120px";
        document.getElementById("search-bar").style.height = "60px";
        document.getElementById("search-bar").style.paddingLeft = "30px";
        document.getElementById("search-bar").style.paddingRight = "30px";
        document.getElementById("search-bar").style.marginLeft = "10px";
        first_time_lage += 1;

        document.getElementById("logo-bar").style.marginRight = "10px";
        document.getElementById("profile-bar").style.marginLeft = "10px";
      }
      else {
        document.getElementById("search-bar").style.width = "0px";
        document.getElementById("search-bar").style.height = "0px";
        document.getElementById("search-bar").style.paddingLeft = "0px";
        document.getElementById("search-bar").style.paddingRight = "0px";
        document.getElementById("search-bar").style.marginLeft = "0px";

        document.getElementById("logo-bar").style.marginRight = "450px";
        document.getElementById("profile-bar").style.marginLeft = "450px";
      }
    }
  }
}
function load_location(){
  if (document.getElementById("search-bar").style.width != "0px") {
    document.getElementById("search-bar").style.width = "0px";
    document.getElementById("search-bar").style.height = "0px";
    document.getElementById("search-bar").style.paddingLeft = "0px";
    document.getElementById("search-bar").style.paddingRight = "0px";
    document.getElementById("search-bar").style.marginLeft = "0px";

    if (document.getElementById("location-text").style.width == "0px"){
      document.getElementById("location-text").style.width = "120px";
      document.getElementById("location-text").style.height = "56px";
      document.getElementById("location-text").style.paddingLeft = "90px";
      document.getElementById("location-text").style.paddingRight = "90px";
      document.getElementById("location-text").style.marginLeft = "10px";
      document.getElementById("location-text").style.fontSize = "30px";

      document.getElementById("logo-bar").style.marginRight = "10px";
      document.getElementById("profile-bar").style.marginLeft = "10px";
    }
    else {
      if (second_time_lage == 0){
        document.getElementById("location-text").style.width = "120px";
        document.getElementById("location-text").style.height = "56px";
        document.getElementById("location-text").style.paddingLeft = "90px";
        document.getElementById("location-text").style.paddingRight = "90px";
        document.getElementById("location-text").style.marginLeft = "10px";
        document.getElementById("location-text").style.fontSize = "30px";
        second_time_lage = 1;

        document.getElementById("logo-bar").style.marginRight = "10px";
        document.getElementById("profile-bar").style.marginLeft = "10px";
      }
      else {
        document.getElementById("location-text").style.width = "0px";
        document.getElementById("location-text").style.height = "0px";
        document.getElementById("location-text").style.paddingLeft = "0px";
        document.getElementById("location-text").style.paddingRight = "0px";
        document.getElementById("location-text").style.marginLeft = "0px";
        document.getElementById("location-text").style.fontSize = "0px";

        document.getElementById("logo-bar").style.marginRight = "450px";
        document.getElementById("profile-bar").style.marginLeft = "450px";
      }
    }
  }
  else {
    if (document.getElementById("location-text").style.width == "0px"){
      document.getElementById("location-text").style.width = "120px";
      document.getElementById("location-text").style.height = "56px";
      document.getElementById("location-text").style.paddingLeft = "90px";
      document.getElementById("location-text").style.paddingRight = "90px";
      document.getElementById("location-text").style.marginLeft = "10px";
      document.getElementById("location-text").style.fontSize = "30px";

      document.getElementById("logo-bar").style.marginRight = "10px";
      document.getElementById("profile-bar").style.marginLeft = "10px";
    }
    else {
      if (second_time_lage == 0){
        document.getElementById("location-text").style.width = "120px";
        document.getElementById("location-text").style.height = "56px";
        document.getElementById("location-text").style.paddingLeft = "90px";
        document.getElementById("location-text").style.paddingRight = "90px";
        document.getElementById("location-text").style.marginLeft = "10px";
        document.getElementById("location-text").style.fontSize = "30px";
        second_time_lage = 1;

        document.getElementById("logo-bar").style.marginRight = "10px";
        document.getElementById("profile-bar").style.marginLeft = "10px";
      }
      else {
        document.getElementById("location-text").style.width = "0px";
        document.getElementById("location-text").style.height = "0px";
        document.getElementById("location-text").style.paddingLeft = "0px";
        document.getElementById("location-text").style.paddingRight = "0px";
        document.getElementById("location-text").style.marginLeft = "0px";
        document.getElementById("location-text").style.fontSize = "0px";

        document.getElementById("logo-bar").style.marginRight = "450px";
        document.getElementById("profile-bar").style.marginLeft = "450px";
      }
    }
  }
}
