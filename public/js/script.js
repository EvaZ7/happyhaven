let socket = io();
let messages = document.querySelector("main section:nth-of-type(2) ul");
let inputText = document.querySelector("input#message");
inputName = document.querySelector("input#name");
let send = document.querySelector("button#send");
let typingState = document.querySelector("p");

const radioButtons = document.querySelectorAll('input[name="room"]');
let chatBackground = document.querySelector("section:nth-of-type(2)");

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
    chatBackground.classList.add(selectedRoom);

    console.log(selectedRoom);
  });

socket.on("roomstyle", (selectedRoom) => {
  // add the selected room as a class to the chatBackground variable
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
  messages.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: data.name + ": " + data.message,
    })
  );
  messages.scrollTop = messages.scrollHeight;
}

// navigator.geolocation.watchPosition((position) => {
//   console.log(position.coords.latitude, position.coords.longitude);
// });
