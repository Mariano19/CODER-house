let map;
let service;
let infowindow;


function initMap() {
  const mapa = new google.maps.LatLng(-34.897890122901906, -57.947344192632954);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: mapa,
    zoom: 16,
    disableDefaultUI: true,
  });
  const request = {
    query: "Veterinaria Las Cuadreras",
    fields: ["name", "geometry"],
  };
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}


function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    animation:google.maps.Animation.DROP
  });
  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "Las cuadreras br/ Calle 41 47");
    infowindow.open(map,marker);
    
  });
  
  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  marker.addListener("click", () => { 		    
    map.setZoom(17);
    map.setCenter(marker.getPosition());
  });
}
