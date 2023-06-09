const APIkey = "480acf8157b90eef500fa76bc0ac0586";
const button = document.querySelector("#searchButton")
const searchText = document.querySelector("#searchText")

button.addEventListener("click", function(){
    const city = searchText.value
    searchWeather(city)
})


function searchWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=imperial`;

    fetch(apiUrl)
        .then( response => response.json())
        .then( data  => {
            console.log(data)
            // const lat = data.coord.lat
            // const lon = data.coord.lon


        })
}



