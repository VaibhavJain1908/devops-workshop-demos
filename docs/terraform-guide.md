# Terraform Guide

## Core Concepts

### Resources
Infrastructure components (EC2, VPC, S3, etc.)

### Variables
Input parameters for configurations

### Outputs
Values to display after apply

### State
Current infrastructure state

## Workflow

```bash
# Initialize
terraform init

# Plan
terraform plan

# Apply
terraform apply

# Destroy
terraform destroy
```

## Best Practices

1. **Use Variables**: Make configs reusable
2. **Remote State**: Store state in S3
3. **Modules**: Organize code
4. **Workspaces**: Manage environments
5. **Version Control**: Track changes

## File Structure

```
terraform/
├── main.tf          # Main configuration
├── variables.tf     # Input variables
├── outputs.tf       # Output values
├── terraform.tfvars # Variable values
└── modules/         # Reusable modules
```
