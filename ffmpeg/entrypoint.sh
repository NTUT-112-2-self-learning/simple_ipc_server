#!/bin/bash

ffmpeg -i /demo.mp4 \
-c:v libx265 \
-c:a aac \
-f hls \
-hls_time 1 \
-hls_list_size 10 \
-hls_flags delete_segments \
-hls_segment_filename /stream_%03d.ts /stream.m3u8

# 3
while true; do
    sleep 1
done
