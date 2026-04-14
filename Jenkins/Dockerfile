FROM jenkins/jenkins:lts

USER root

# Install kubectl - using the full direct path to the binary
RUN apt-get update && apt-get install -y curl && \
    curl -LO https://dl.k8s.io/release/v1.35.0/bin/linux/amd64/kubectl && \
    install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl && \
    rm kubectl

USER jenkins
