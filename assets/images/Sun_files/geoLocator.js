
function codeAddress() {
  address = document.getElementById('address').value;
  geocoder.geocode({'address' : address}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK) {
        lat = results[0].geometry.location.lat();
        long = results[0].geometry.location.lng();
        console.log( "lat : " + lat );
        console.log( "long : " + long )}
    else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

// google.maps.event.addDomListener(window, 'load', initialize);
// if (status == google.maps.GeocoderStatus.OK) {
//   var marker = new google.maps.Marker({
//       position: results[0].geometry.location
//   })
//   lat = marker.position.k;
//   long = marker.position.D;
//   // geoLocation(lat, long);
// } else {
//   alert('Geocode was not successful for the following reason: ' + status);
// }
// geocoder.geocode({'address' : address}, function(results, status){
//   lat = results[0].geometry.location.lat();
//   long = results[0].geometry.location.lng();
//   console.log( "lat : " + lat );
//   console.log( "long : " + long );
// });
// // function geoLocation(lat, long) {
//   if (lat == null | long == null) {return (latSaved, longSaved)};
//   var latSaved = lat;
//   var longSaved = long;
// }
