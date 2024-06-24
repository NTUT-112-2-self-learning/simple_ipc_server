FROM ubuntu:latest

# Install build dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libmp3lame-dev \
    libopus-dev \
    libvpx-dev \
    libx264-dev \
    wget \
    && echo "Build dependencies installed."

RUN apt-get update && apt-get install -y ffmpeg

COPY . /
RUN chmod +x /entrypoint.sh

EXPOSE 5000

ENTRYPOINT ["/entrypoint.sh"]