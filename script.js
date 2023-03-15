const lat = document.getElementById("lat")
const lon = document.getElementById("lon")

  
 



if(navigator.geolocation){
 navigator.geolocation.getCurrentPosition(mostrar)

}else{
 alert("localização desligada!")

}

function mostrar(pos){
  
  
  
 console.log(`Latitude: ${pos.coords.latitude} Lingitude: ${ pos.coords.longitude} `)

}