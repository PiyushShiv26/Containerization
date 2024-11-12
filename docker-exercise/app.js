const express = require("express");
const app = express();
const port = 3000;

app.get('/',function(req,res){
    res.send('Hello from Docker!');
});

app.listen(port, ()=>{
    console.log(`App running on https://localhost:${port}`)
});

/*
// To build the Docker image, use the following command:
docker build -t docker-exercise .
// To run this app, use the following command:
docker run -p 8080:3000 -d --name myapp docker-exercise
*/