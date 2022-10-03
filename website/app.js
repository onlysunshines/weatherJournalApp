/* Global Variables */
// Personal API Key for OpenWeatherMap API
let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = '&apikey=b232b7f7efcec6ee8af188f7c9de327b';
const units = "&units=imperial"
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", generate);

/* Function called by event listener */
function generate(e) {
    const newZip = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;
    let projectData = {};
    
    getZip(baseURL, newZip, units, apiKey, projectData).then(function (data) {
        postData("/add", {
            temperature: data.main.temp,
            date: newDate,
            content: feelings,
        }).then(function () {
            updateUI();
        });
    });
}

/* Function to GET Web API Data */
const getZip = async (baseURL, newZip, units, apiKey) => {
    const request = await fetch(baseURL + newZip + units + apiKey);
    try {
        const allData = await request.json();
        return allData;
    } catch(error) {
        console.log("error", error);
    }
}

/*
async function getData() {
    let response = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?zip=${zip-code},${country-code}&appid=${APIKey}`);
    let data = await response.json()
    return data;
}
getData().then(data => console.loge(data));
*/

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data)
        const response  = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

            try {
                const newData = await response.json();
                console.log(newData);
                return newData
            }catch(error) {
                console.log("error", error);
            }
}

const updateUI = async () => {
    const request = await fetch("/all");
    try {
        const allData = await request.json();
        document.getElementById("date").innerHTML = allData.date;
        document.getElementById("temp").innerHTML = 
            Math.round(allData.temperature) + "degrees";
        document.getElementsById("content").innerHTML = allData.feelings;
    } catch (error) {
        console.log("error", error);
    }
}
