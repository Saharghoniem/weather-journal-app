/* Global Variables */
// '<your_api_key>&units=imperial';
const abiKey = "1f0629d404a51822c0d11f9bdf5272a2&units=imperial";
let theTemp;
// Create a new date instance dynamically with JS
d = new Date();
newDate = d.getMonth() + 1 + ":" + d.getDate() + ":" + d.getFullYear();
//my function
let makeGenrater = function () {
  myCode = document.getElementById("zip").value;
  feeling = document.getElementById("feelings").value;
  theURL = `https://api.openweathermap.org/data/2.5/weather?zip=${myCode}&appid=`;
  myApi = getTheData(theURL);

  myApi.then((data) => {
    lastData = [];
    theTemp = data.main.temp;
    myFeeling = feeling;
    myDate = newDate;
    lastData.push(theTemp, myFeeling, myDate);
    // console.log(lastData);
    sendMyData("/add", lastData);
    retrieveData();
  });
};

// fetch data
getTheData = async (theURL) => {theLink = theURL + abiKey;
  response = await fetch(theLink);
  try {
    date = await response.json();
    return date;
  } catch (error) {
    console.log(`error`);
  }
};

// // locallserver
// // method
sendMyData = async (myRoute, finalData) => {
  response = await fetch(myRoute, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(finalData),
  });
  try {
    const theData = await response.json();
    console.log(theData);
    return theData;
  } catch (error) {
    console.log("error");
  }
};
const retrieveData = async () => {
  const request = await fetch("/all");
  try {
    // Transform into JSON
    const allData = await request.json();
    console.log("done");
    // Write updated data to DOM elements
    document.getElementById("temp").innerHTML =
      Math.round(allData[0])+" degrees";
    document.getElementById("content").innerHTML = allData[1];
    document.getElementById("date").innerHTML = allData[2];
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
document.getElementById("generate").addEventListener("click", makeGenrater);