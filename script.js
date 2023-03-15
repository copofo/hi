var lat = document.getElementById("lat")
var lon = document.getElementById("lon")
  
 



if(navigator.geolocation){
 

}else{
 alert("localização desligada!")

}

function mostrar(pos){
  
  navigator.geolocation.getCurrentPosition(mostrar)
  lat.innerHTML = pos.coords.latitude
  lon.innerHTML = pos.coords.longitude
  
  
  
}