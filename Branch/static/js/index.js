function load_search(){
  if (document.getElementById("location-text").style.width != "0px"){
    document.getElementById("location-text").style.width = "0px"
    document.getElementById("location-text").style.height = "0px"
    document.getElementById("location-text").style.paddingLeft = "0px"
    document.getElementById("location-text").style.paddingRight = "0px"
    document.getElementById("location-text").style.fontSize = "0px"
    document.getElementById("location-text").style.marginLeft = "0px"

    document.getElementById("search-bar").style.width = "240px"
    document.getElementById("search-bar").style.height = "60px"
    document.getElementById("search-bar").style.paddingLeft = "30px"
    document.getElementById("search-bar").style.paddingRight = "30px"
    document.getElementById("search-bar").style.fontSize = "30px"
    document.getElementById("search-bar").style.marginLeft = "10px"
  }
  else {
    if (document.getElementById("search-bar").style.width == "0px"){
      document.getElementById("search-bar").style.width = "240px"
      document.getElementById("search-bar").style.height = "60px"
      document.getElementById("search-bar").style.paddingLeft = "30px"
      document.getElementById("search-bar").style.paddingRight = "30px"
      document.getElementById("search-bar").style.fontSize = "30px"
      document.getElementById("search-bar").style.marginLeft = "10px"
    }
    else if (document.getElementById("search-bar").style.width != "0px"){
      document.getElementById("search-bar").style.width = "0px"
      document.getElementById("search-bar").style.height = "0px"
      document.getElementById("search-bar").style.paddingLeft = "0px"
      document.getElementById("search-bar").style.paddingRight = "0px"
      document.getElementById("search-bar").style.fontSize = "0px"
      document.getElementById("search-bar").style.marginLeft = "0px"
    }
  }
}
function load_location(){
  if (document.getElementById("search-bar").style.width != "0px"){
    document.getElementById("search-bar").style.width = "0px"
    document.getElementById("search-bar").style.height = "0px"
    document.getElementById("search-bar").style.paddingLeft = "0px"
    document.getElementById("search-bar").style.paddingRight = "0px"
    document.getElementById("search-bar").style.fontSize = "0px"
    document.getElementById("search-bar").style.marginLeft = "0px"

    document.getElementById("location-text").style.width = "240px"
    document.getElementById("location-text").style.height = "56px"
    document.getElementById("location-text").style.paddingLeft = "30px"
    document.getElementById("location-text").style.paddingRight = "30px"
    document.getElementById("location-text").style.fontSize = "30px"
    document.getElementById("location-text").style.marginLeft = "10px"
  }
  else {
    if (document.getElementById("location-text").style.width == "0px"){
      document.getElementById("location-text").style.width = "240px"
      document.getElementById("location-text").style.height = "56px"
      document.getElementById("location-text").style.paddingLeft = "30px"
      document.getElementById("location-text").style.paddingRight = "30px"
      document.getElementById("location-text").style.fontSize = "30px"
      document.getElementById("location-text").style.marginLeft = "10px"
    }
    else if (document.getElementById("location-text").style.width != "0px"){
      document.getElementById("location-text").style.width = "0px"
      document.getElementById("location-text").style.height = "0px"
      document.getElementById("location-text").style.paddingLeft = "0px"
      document.getElementById("location-text").style.paddingRight = "0px"
      document.getElementById("location-text").style.fontSize = "0px"
      document.getElementById("location-text").style.marginLeft = "0px"
    }
  }
}
AOS.init();
