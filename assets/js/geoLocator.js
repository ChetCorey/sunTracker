function codeAddress() {
  address = document.getElementById('address').value;
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address' : address}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK) {
      lat = results[0].geometry.location.lat();
      long = results[0].geometry.location.lng();
      city = results[0].address_components[0].long_name;
      state = results[0].address_components[2].short_name;
      placeholder = city + " ," + state;
      textBoxWidth = ((placeholder.length + 1) *16) + 'px';
      $('#address').attr("placeholder", placeholder);
      $('#address').val('');
      $("#address").focus();
      $("#address").css("width", textBoxWidth);
      // $('Body').css("background-image",
      // this.style.width = ((this.value.length + 1) * 13 + 40) + 'px';" >

      console.log( "city : " + city );
      console.log( "state : " + state );
    }
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
