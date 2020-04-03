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
    console.log(msg);
    const data = { content: msg };
    console.log(data);

    fetch('http://localhost:8080/touch', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'text/plain',
            },
        body: JSON.stringify(data),
    })
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

export { connect, sendMsg, touch };