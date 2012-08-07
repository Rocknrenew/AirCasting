angular.module("aircasting").directive('googlemap', function(googleMapManager){
  return {
    link: function(scope, element, attrs, controller) {
      var lat = googleMapManager.getMapCookie("vp_lat") || 38.693861956002024;
      var lng = googleMapManager.getMapCookie("vp_lng") || -87.5;
      var latlng = new google.maps.LatLng(lat, lng);
      var zoom = googleMapManager.getMapCookie("vp_zoom") || 5;
      var minZoom = 3;
      var options = {
        zoom: parseInt(zoom, 10),
        minZoom: minZoom,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          mapTypeIds: [
            google.maps.MapTypeId.ROADMAP,
            google.maps.MapTypeId.SATELLITE,
            google.maps.MapTypeId.TERRAIN,
            google.maps.MapTypeId.HYBRID
          ]
        },
        zoomControl: false,
        panControl: false,
        streetViewControl: true,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER
        }
      };
      googleMapManager.init(element[0], options);
    }
  };
});
