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

let encodeapi = (msg) => {
    const data = { content: msg };
    console.log(msg)
    //http://localhost:8080/touch
    //console.log("URL on API is: " + url)

    return fetch("http://localhost:8080/touch", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'text/plain',
            },
        body: JSON.stringify(data),
    });

    
        /*let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                },
            body: JSON.stringify(data),
        };
    
        return fetch(url, options).then(response => response.text());*/

}

export { connect, sendMsg, encodeapi };