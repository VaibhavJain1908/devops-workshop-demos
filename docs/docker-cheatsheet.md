# Docker Commands Cheatsheet

## Images

```bash
# Build image
docker build -t <name>:<tag> .

# List images
docker images

# Remove image
docker rmi <image-id>

# Pull image
docker pull <image-name>

# Push image
docker push <image-name>
```

## Containers

```bash
# Run container
docker run -d -p <host-port>:<container-port> --name <name> <image>

# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop <container-id>

# Start container
docker start <container-id>

# Remove container
docker rm <container-id>

# View logs
docker logs <container-id>

# Follow logs
docker logs -f <container-id>

# Execute command
docker exec -it <container-id> <command>
```

## System

```bash
# View system info
docker info

# View disk usage
docker system df

# Clean up
docker system prune -a
```
