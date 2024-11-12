const express = require('express');
const Redis = require('redis');
const app = express();
const port = 3000;

const redis = Redis.createClient({
    host: 'redis',
    port: 6379
});

redis.on('error', (err) => {
    console.error('Redis error:', err);
});

redis.on('connect', () => {
    console.log('Connected to Redis');
});


app.get('/', function(req, res) {
    res.send('Hello from Docker!');
});

app.listen(port, () => {
    console.log(`App running on https://localhost:${port}`);
});

/*
// To build the Docker image, use the following command:
docker build -t docker-exercise-2 .
// To run this app, use the following command:
docker run -p 8080:3000 -d --name myapp docker-exercise-2
// To run the Redis container, use the following command:
docker run -d --name redis -p 6379:6379 redis
// To run both containers using Docker Compose, use the following command:
docker-compose up --build
*/