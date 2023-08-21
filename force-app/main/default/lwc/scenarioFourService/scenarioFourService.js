
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}
    const getDistance = (coordinateOneLatitude, coordinateOneLongitude, coordinateTwoLatitude,  coordinateTwoLongitude)=> {
        var lon1 = degrees_to_radians(coordinateOneLongitude);
        var lat1 = degrees_to_radians(coordinateOneLatitude);
        var lon2 = degrees_to_radians(coordinateTwoLongitude);
        var lat2 = degrees_to_radians(coordinateTwoLatitude);

        var dlon = lon2 - lon1;
		var dlat = lat2 - lat1;
		var a = Math.pow(Math.sin(dlat / 2), 2)
				+ Math.cos(lat1) * Math.cos(lat2)
				* Math.pow(Math.sin(dlon / 2),2);
        return (2 * Math.asin(Math.sqrt(a))) * 6371;
    }

    export {getDistance};