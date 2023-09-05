function load_search(){
  if (document.getElementById("location-bar").style.display == "block"){
    document.getElementById("location-bar").style.display = "none"
    document.getElementById("search-bar").style.display = "block"
  }
  else if (document.getElementById("location-bar").style.display == "none"){
    document.getElementById("location-bar").style.display = "block"
    document.getElementById("search-bar").style.display = "none"
  }
}
function load_location(){
  if (document.getElementById("search-bar").style.display == "block"){
    document.getElementById("search-bar").style.display = "none"
    document.getElementById("location-bar").style.display = "block"
  }
  else if (document.getElementById("search-bar").style.display == "none"){
    document.getElementById("location-bar").style.display = "none"
    document.getElementById("search-bar").style.display = "block"
  }
}
AOS.init()
