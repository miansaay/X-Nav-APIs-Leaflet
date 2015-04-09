

$(document).ready(function() { 

    //Creamos la variable map en el identificador "map" del div
    var map = L.map('map');

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
     
    map.locate({setView: true, maxZoom: 16, enableHighAccuracy: true});
  
    
    function onLocationFound(e) {
       var radius = e.accuracy / 2;
       //console.log(L.marker(e.latlng).getLatLng());
       L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
       L.circle(e.latlng, radius).addTo(map);
    }
    map.on('locationfound', onLocationFound);
  
    function onLocationError(e) {
       alert(e.message);
    }
    map.on('locationerror', onLocationError);

    var popup = L.popup();
    function onMapClick(e) {
       popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(map);  
    }
    map.on('click', onMapClick);
  

   
});
