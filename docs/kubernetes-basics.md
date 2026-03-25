# Kubernetes Basics

## Core Concepts

### Pods
Smallest deployable unit. Can contain one or more containers.

### Deployments
Manages desired state of pods. Handles scaling and updates.

### Services
Provides stable endpoint for pods. Load balances traffic.

### ConfigMaps
Store configuration data.

### Secrets
Store sensitive data (passwords, keys).

## Common Commands

```bash
# Get resources
kubectl get pods
kubectl get deployments
kubectl get services

# Describe resource
kubectl describe pod <pod-name>

# View logs
kubectl logs <pod-name>

# Execute command
kubectl exec -it <pod-name> -- sh

# Apply configuration
kubectl apply -f <file.yaml>

# Delete resource
kubectl delete -f <file.yaml>

# Scale deployment
kubectl scale deployment <name> --replicas=5
```
