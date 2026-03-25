# Demo 1: Docker Basics

Learn Docker fundamentals by building and running your first container.

## What You'll Learn
- Write a Dockerfile
- Build Docker images
- Run containers
- Port mapping
- Container management

## Commands

### Build Image
```bash
docker build -t my-first-app:v1 .
```

### Run Container
```bash
docker run -d -p 8080:3000 --name demo-app my-first-app:v1
```

### Access Application
Open browser: http://localhost:8080

### View Logs
```bash
docker logs demo-app
```

### Execute Commands Inside Container
```bash
docker exec -it demo-app sh
```

### Stop Container
```bash
docker stop demo-app
```

### Remove Container
```bash
docker rm demo-app
```

### Remove Image
```bash
docker rmi my-first-app:v1
```

## Expected Output
You should see a purple gradient page with "Hello from Docker!" and your container ID.
