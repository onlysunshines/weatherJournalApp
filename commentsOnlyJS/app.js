// Personal API Key for OpenWeatherMap API

const { response } = require("express");
const { append } = require("express/lib/response");

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

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

postData('/add', {answer:42});

/* Function to GET Project Data */
app.get('/all', sendData);

function sendData(req, res) {
    response.send(projectData);
};