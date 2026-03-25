# DevOps Workshop - Practical Demonstrations

Welcome to the DevOps Workshop practical demonstrations repository! 🚀

This repository contains 5 hands-on demos covering:
- Docker Basics
- Multi-Container Applications
- Kubernetes Deployment
- CI/CD Pipelines
- Infrastructure as Code

## 📋 Prerequisites

- Docker Desktop installed
- Git installed
- kubectl installed (for K8s demos)
- AWS CLI configured (for Terraform demo)
- Node.js 18+ (for local testing)
- Python 3.9+ (for CI/CD demo)

## 🎯 Workshop Structure

```
devops-workshop-demos/
├── demo-1-docker-basic/          # Docker fundamentals
├── demo-2-docker-compose/        # Multi-container apps
├── demo-3-kubernetes/            # K8s deployment
├── demo-4-cicd/                  # GitHub Actions pipeline
├── demo-5-terraform/             # Infrastructure as Code
└── docs/                         # Additional documentation
```

## 🚀 Quick Start

### Demo 1: Docker Basics
```bash
cd demo-1-docker-basic
docker build -t my-first-app:v1 .
docker run -d -p 8080:3000 --name demo-app my-first-app:v1
# Open http://localhost:8080
```

### Demo 2: Docker Compose
```bash
cd demo-2-docker-compose
docker-compose up -d
# Open http://localhost:8080
```

### Demo 3: Kubernetes
```bash
cd demo-3-kubernetes
minikube start
eval $(minikube docker-env)
docker build -t k8s-demo-app:v1 .
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
minikube service demo-app-service --url
```

### Demo 4: CI/CD Pipeline
```bash
cd demo-4-cicd
# Push to GitHub and watch Actions tab
```

### Demo 5: Terraform
```bash
cd demo-5-terraform
terraform init
terraform plan
terraform apply
```

## 📚 Documentation

- [Docker Commands Cheatsheet](docs/docker-cheatsheet.md)
- [Kubernetes Basics](docs/kubernetes-basics.md)
- [CI/CD Best Practices](docs/cicd-best-practices.md)
- [Terraform Guide](docs/terraform-guide.md)

## 🎓 Learning Path

1. Start with Demo 1 (Docker Basics)
2. Progress to Demo 2 (Multi-container)
3. Master Demo 3 (Kubernetes)
4. Implement Demo 4 (CI/CD)
5. Complete Demo 5 (Terraform)

## 🤝 Contributing

Feel free to fork this repository and submit pull requests!

## 📧 Contact

**Vaibhav**  
Lead DevOps Engineer, PaloAlto Soft  
LinkedIn: [Your LinkedIn Profile]

## 📝 License

MIT License - feel free to use for learning and teaching!

---

⭐ Star this repo if you found it helpful!
