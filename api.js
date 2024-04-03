<script>
let latitude;
let longitude;

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  // Construct the URL using latitude and longitude
  const weatherURL = https://weather.com/weather/today/l/${latitude},${longitude};

  // Fetch weather data using the constructed URL
  fetch(weatherURL)
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      // Display weather data in the div
      document.getElementById("weatherInfo").innerHTML = data;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
</script>
