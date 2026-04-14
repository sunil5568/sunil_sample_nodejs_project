FROM jenkins/jenkins:latest

USER root

# Install kubectl
RUN apt-get update && apt-get install -y curl && \
    curl -LO https://dl.k8s.io/release/v1.35.0/bin/linux/amd64/kubectl && \
    install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl && \
    rm kubectl

# Install Docker CLI
RUN apt-get install -y docker.io

# Add jenkins user to docker group (GID 0 is often root on Desktop)
RUN usermod -aG docker jenkins

USER jenkins
