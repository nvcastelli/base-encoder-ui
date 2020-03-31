// api/index.js
let connect = () => {
    let socket = new WebSocket("ws://localhost:8080/ws");
    console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = msg => {
    console.log(msg);
  };

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = msg => {
    let socket = new WebSocket("ws://localhost:8080/ws");
    console.log("sending msg: ", msg);
    socket.send(msg);
};

let touch = msg => {
    let socket = new WebSocket("ws://localhost:8080/touch");
    console.log("Trying to touch backend with ", msg);
    socket.send(msg);
}

export { connect, sendMsg, touch };