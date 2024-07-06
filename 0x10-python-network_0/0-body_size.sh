#!/bin/bash
# This script takes a URL, sends a request to that URL using curl, and displays the size of the body of the response in bytes
curl -sI "$1" | grep -i Content-Length | awk '{print $2}'
