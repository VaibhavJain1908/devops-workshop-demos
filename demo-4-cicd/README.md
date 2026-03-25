# Demo 4: CI/CD Pipeline with GitHub Actions

Automated testing, building, and deployment pipeline.

## What This Demonstrates
- Automated testing on every commit
- Continuous Integration with GitHub Actions
- Docker image building and pushing
- Deployment automation

## Setup

### 1. Push to GitHub
```bash
git add .
git commit -m "Add CI/CD demo"
git push origin main
```

### 2. Configure GitHub Secrets
Go to: Settings → Secrets → Actions

Add:
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password/token

### 3. Watch Pipeline
- Go to "Actions" tab in GitHub
- See pipeline running automatically

## Pipeline Stages

1. **Test**: Run pytest and flake8
2. **Build**: Build Docker image
3. **Push**: Push to Docker Hub

## Local Testing

### Run Tests
```bash
pip install -r requirements.txt
pytest test_app.py -v
```

### Run Application
```bash
python app.py
# Access: http://localhost:5000
```

### Build Docker Image
```bash
docker build -t cicd-demo:v1 .
docker run -d -p 5000:5000 cicd-demo:v1
```

## Pipeline Trigger
Pipeline runs on:
- Push to main branch
- Pull request to main branch

## Success Criteria
- ✅ All tests pass
- ✅ Code passes linting
- ✅ Docker image builds successfully
- ✅ Image pushed to registry
