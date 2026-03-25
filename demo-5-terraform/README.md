# Demo 5: Infrastructure as Code with Terraform

Provision AWS infrastructure using code.

## Prerequisites
- AWS CLI configured
- Terraform installed
- AWS account with appropriate permissions

## What Gets Created
- VPC with CIDR 10.0.0.0/16
- Internet Gateway
- Public Subnet
- Route Table
- Security Group (HTTP + SSH)
- EC2 Instance with Apache web server

## Commands

### Initialize Terraform
```bash
terraform init
```

### Validate Configuration
```bash
terraform validate
```

### Format Code
```bash
terraform fmt
```

### Plan Infrastructure
```bash
terraform plan
```

### Apply Changes
```bash
terraform apply
# Type 'yes' when prompted
```

### View Outputs
```bash
terraform output
terraform output web_server_public_ip
```

### Access Web Server
```bash
curl http://$(terraform output -raw web_server_public_ip)
```

### Show State
```bash
terraform show
terraform state list
```

### Destroy Infrastructure
```bash
terraform destroy
# Type 'yes' when prompted
```

## Workspaces (Optional)

### Create Workspace
```bash
terraform workspace new dev
terraform workspace new prod
```

### List Workspaces
```bash
terraform workspace list
```

### Switch Workspace
```bash
terraform workspace select dev
```

## Cost Estimate
- VPC: Free
- EC2 t2.micro: ~$0.0116/hour (Free tier eligible)
- Total: ~$8.50/month

⚠️ **Remember to run `terraform destroy` after demo to avoid charges!**
