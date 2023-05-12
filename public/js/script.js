let socket = io();
let messages = document.querySelector("main section:nth-of-type(2) ul");
let inputText = document.querySelector("input#message");
let inputName = document.querySelector("input#name");
let send = document.querySelector("button#send");
let typingState = document.querySelector("p");

let radioButtons = document.querySelectorAll('input[name="room"]');
let chatBackground = document.querySelector("section:nth-of-type(2)");

let weatherArticle = document.querySelector("header article")
// let userList = document.querySelector("section:first-of-type ul")
// let nameDataonline = document.querySelector("section:first-of-type ul li:first-of-type p:first-of-type")

let canUpdate = true;

//Due to max API calls up to 1000 a day, a setinterval of 2 minutes is added please DO NOT REMOVE!!!
function limitApiCalls() {
  setInterval(() => {
    canUpdate = true;
    console.log('canUpdate is now true!')
  }, 120000)
}

function initGeoTracker() {
  limitApiCalls();

  navigator.geolocation.watchPosition(position => {
    if(canUpdate) {
      updateData(position.coords.latitude, position.coords.longitude)
      canUpdate = false;
      console.log('Updated location!');
    } else {
      console.warn('Blocked update due to API limit.')
    }
  })
}

// fetch API with latitude and longitude
async function updateData(lat, lon) {
  const apiKey = "c04cdde0d029a13051d3d39a8c83f4f1";
  const lang = "nl"
  const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`;

  try {
    const response = await fetch(url1)
    const data = await response.json()

    displayData(data);

  } catch(err){
    console.log(err)
  }
}

// fetch and insert data from API
function displayData(data) {
    if(data) {
      console.log(data)
      let location = data.name
      let temperature = Math.round(data.main.temp) + "˚C"
      let description = data.weather[0].description
      let icon = data.weather[0].icon
      weatherArticle.innerHTML = ''
      weatherArticle.insertAdjacentHTML("beforeend", `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"><h3>${location}</h3><p>${temperature}</p><p>${description}</p>`);
    }
}

initGeoTracker();

// get data from input field of roomstyle
document
  .querySelector("main section:first-of-type form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedRoom = radioButton.value;
        break;
      }
    }
    // emit the selected room style to the server
    socket.emit("roomstyle", selectedRoom);

    // add the selected room as a class to the chatBackground variable
    chatBackground.classList.value = ''
    chatBackground.classList.add(selectedRoom);

    console.log(selectedRoom);
  });

socket.on("roomstyle", (selectedRoom) => {
  // add the selected room as a class to the chatBackground variable
  chatBackground.classList.value = ''
  chatBackground.classList.add(selectedRoom);
});

// get data from input field of message and name
document
  .querySelector("main section:nth-of-type(2) form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    let data = { name: inputName.value, message: inputText.value };

    // With emit create component
    socket.emit("chat", data);

    console.log(inputName.value, inputText.value);
    inputText.value = "";
  });

// Eventlistener on keypress event in input text
inputText.addEventListener("keypress", () => {
  socket.emit("typing", inputName.value);
});

// Create message with the data and scroll down
socket.on("chat", (data) => {
  console.log(data);
  addChat(data);
  typingState.innerHTML = "";
});

// Create "is typing" from data with input name and set timeout
socket.on("typing", (inputName) => {
  console.log(inputName);
  typingState.innerHTML = inputName + " is aan het typen...";
  setTimeout(() => {
    typingState.innerHTML = "";
  }, 5000);
});

// Add chat history to chat
socket.on("history", (history) => {
  history.forEach((data) => {
    addChat(data);
  });
});

function addChat(data) {
  // let nameData = data.name
  messages.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: data.name + ": " + data.message,
    })
  );
  messages.scrollTop = messages.scrollHeight;
  // console.log(nameDataonline)
  // if (nameData == nameDataonline.innerHTML) {
  //   console.log("already in use")
  // } else {
  //   userList.insertAdjacentHTML("beforeend", `<li><div>o</div><p>${nameData}</p><p></p></li>`);
  // }
}
