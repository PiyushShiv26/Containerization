# 🐳 Docker Exercises — Containerization Workshop

This repository contains my solutions to exercises from the [Containerization Workshop](https://github.com/thealcodingclub/Containerization-Workshop) organized by **The AL Coding Club**.

---

## Docker Concepts

### How Docker Works
1. Checks for local image
2. Pulls from Docker Hub (if not available locally)
3. Creates a container
4. Runs the container

```docker
# Pull and run hello-world
docker run hello-world

# Run nginx server
docker run -d -p

# List containers
docker ps
docker ps -a

# List images
docker images

# Pull image
docker pull ubuntu:latest

# Run interactive container
docker run -it ubuntu bash
```docker
# Pull and run hello-world
docker run hello-world

# Run nginx server
docker run -d -p

# List containers
# ps stands for process status
docker ps
docker ps -a

# List images
docker images

# Pull image
docker pull ubuntu:latest

# Run container
docker run -it ubuntu bash
# Pulling a container which is an interactive terminal
# -i - interactive mode
# -t - terminal

# Remove container
docker rm container_id

# Remove image
docker rmi image_id
# rmi - Remove Image

# Remove container
docker rm <container_id>

# Remove image
docker rmi <image_id>
```

Container Lifecycle
```docker
# Create (but don’t start)
docker create

# Start/Run
docker start / docker run

# Pause / Unpause
docker pause / docker unpause

# Stop
docker stop

# Remove
docker rm
```

Dockerfile Basics
```docker
# Base Image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "start"]
```

Best Practices:

1. Use specific base image tags

2. Minimize layers

3. Use .dockerignore

4. Security considerations

Building & Pushing Docker Images
```docker
# Build image
docker build -t myapp:1.0 .

# Tag image for registry
docker tag myapp:1.0 username/myapp:1.0

# Push image to Docker Hub
docker push username/myapp:1.0

# Build using a custom Dockerfile
docker build -f Dockerfile.prod -t myapp:prod .
```
Docker Compose Commands
```docker
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View service status
docker-compose ps

# View logs
docker-compose logs -f

# Scale services (e.g., 3 web containers)
docker-compose up -d --scale web=3

# Rebuild services
docker-compose build
```
