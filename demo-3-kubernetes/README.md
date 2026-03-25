# Demo 3: Kubernetes Deployment

Deploy and manage containerized applications on Kubernetes.

## Prerequisites
- Minikube installed
- kubectl installed

## Setup

### Start Minikube
```bash
minikube start --driver=docker
```

### Build Image (in Minikube)
```bash
eval $(minikube docker-env)
docker build -t k8s-demo-app:v1 .
```

## Deployment

### Deploy Application
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### Check Resources
```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

### Access Application
```bash
minikube service demo-app-service --url
curl $(minikube service demo-app-service --url)
```

## Kubernetes Features Demo

### Scaling
```bash
kubectl scale deployment demo-app-deployment --replicas=5
kubectl get pods -w
```

### Load Balancing
```bash
for i in {1..10}; do curl $(minikube service demo-app-service --url); done
```

### Self-Healing
```bash
kubectl delete pod <pod-name>
kubectl get pods  # New pod automatically created
```

### Rolling Update
```bash
kubectl set image deployment/demo-app-deployment demo-app=k8s-demo-app:v2
kubectl rollout status deployment/demo-app-deployment
```

### Rollback
```bash
kubectl rollout undo deployment/demo-app-deployment
```

### View Logs
```bash
kubectl logs -f <pod-name>
```

### Exec into Pod
```bash
kubectl exec -it <pod-name> -- sh
```

## Cleanup
```bash
kubectl delete -f deployment.yaml
kubectl delete -f service.yaml
minikube stop
```
