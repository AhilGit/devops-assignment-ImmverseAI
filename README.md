# DevOps CI/CD Assignment

## Project Overview

This project demonstrates a complete DevOps CI/CD pipeline using:

- GitHub
- Jenkins
- Docker
- Docker Hub
- AWS EC2
- Kubernetes (Optional)
- Prometheus
- Grafana

## Project Structure

```
app.js
package.json
Dockerfile
README.md
.env.example
Jenkinsfile
```

## Run Locally

Install dependencies

```bash
npm install
```

Start application

```bash
npm start
```

Application URL

```
http://localhost:3000
```

Health Check

```
http://localhost:3000/health
```

## Docker Commands

Build

```bash
docker build -t devops-assignment .
```

Run

```bash
docker run -d -p 3000:3000 devops-assignment
```
Webhook Test Tue Jun 30 09:20:02 UTC 2026
