function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        document.getElementById("weatherInfo").innerHTML = "Geolocation permission denied. Please allow access to your location.";
        // Default coordinates (for example, New York City)
        latitude = 40.7128;
        longitude = -74.0060;
        fetchWeather(latitude, longitude);
        break;
      case error.POSITION_UNAVAILABLE:
        document.getElementById("weatherInfo").innerHTML = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        document.getElementById("weatherInfo").innerHTML = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        document.getElementById("weatherInfo").innerHTML = "An unknown error occurred.";
        break;
    }
  }
  
  function fetchWeather(latitude, longitude) {
    // Construct the URL using latitude and longitude
    const weatherURL = `https://weather.com/weather/today/l/${latitude},${longitude}`;
  
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
  