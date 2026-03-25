output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.demo_vpc.id
}

output "web_server_public_ip" {
  description = "Public IP of web server"
  value       = aws_instance.web_server.public_ip
}

output "web_server_url" {
  description = "URL to access web server"
  value       = "http://${aws_instance.web_server.public_ip}"
}

output "subnet_id" {
  description = "Public subnet ID"
  value       = aws_subnet.public_subnet.id
}
