# Demo 2: Docker Compose - Multi-Container Application

Learn how to orchestrate multiple containers using Docker Compose.

## Architecture
- **Frontend**: Nginx serving static HTML
- **Backend**: Node.js API server
- **Network**: Internal Docker network for communication

## Commands

### Start All Services
```bash
docker-compose up -d
```

### Check Running Services
```bash
docker-compose ps
```

### View Logs
```bash
docker-compose logs -f
```

### Scale Backend
```bash
docker-compose up -d --scale backend=3
```

### Stop All Services
```bash
docker-compose down
```

### Rebuild Services
```bash
docker-compose up -d --build
```

## Access Application
- Frontend: http://localhost:8080
- Backend API: http://localhost:5000/api/count

## What This Demonstrates
- Multi-container orchestration
- Service networking
- Environment variables
- Container dependencies
- Health checks
