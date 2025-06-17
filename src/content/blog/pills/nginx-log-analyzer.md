---
title: Nginx Log Analyzer Tool
description: Simple shell tool to analyze an nginx access log file.
duration: 5min
date: 2025-03-30
tag: bash
---

Simple shell tool to analyse an nginx access log file, which contains the following fields:

- IP address
- Date and time
- Request method and path
- Response status code
- Response size
- Referrer
- User agent

The script is able to run on any Linux server and it provides the following information:

- Top 5 IP addresses with the most requests
- Top 5 most requested paths
- Top 5 response status codes
- Top 5 user agents

Here is an example of what the output should look like:

```bash
Top 5 IP addresses with the most requests:
45.76.135.253 - 1000 requests
142.93.143.8 - 600 requests
178.128.94.113 - 50 requests
43.224.43.187 - 30 requests
178.128.94.113 - 20 requests

Top 5 most requested paths:
/api/v1/users - 1000 requests
/api/v1/products - 600 requests
/api/v1/orders - 50 requests
/api/v1/payments - 30 requests
/api/v1/reviews - 20 requests

Top 5 response status codes:
200 - 1000 requests
404 - 600 requests
500 - 50 requests
401 - 30 requests
304 - 20 requests
```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/lethanix/nginx-log-analyser.git
```

2. Modify permissions to make the script executable
```bash
chmod +x nginx-analyser.sh
```

3. Run the script
```bash
./nginx-analyser.sh nginx-access.log
```

## Script Content

```bash
#!/bin/sh
#
# Script that analyse nginx access logs

# ****************************
# Verify input of the script
# ****************************
## Verify the number of arguments
if [ $# -eq 0 ] && [ $# -lt 2 ]; then
    echo Missing argument: Log file is not provided $1 1>&2
    exit 1
elif [ $# -gt 1 ]; then
    echo 'Too many arguments (+1): ' "('$#') => '$@'" 1>&2
    exit 2
fi

## Verify if $1 argument is a file
if [ ! -f $1 ]; then
    echo Argument is not a file: $1 1>&2
    exit 3
else
    echo Analysing file $1
fi

LOG=$1

######################################################
echo Top 5 IP addresses with the most requests:
awk '{print $1}' $LOG | sort | uniq -c | sort -nr | head -5 \
| awk '{printf "%s - %d requests\n", $2, $1}'

######################################################
echo
echo Top 5 most requested paths:
grep -o '\w\s/.*\sHTTP' $LOG | awk '{print $2}' | sort | uniq -c | sort -nr | head -5 \
| awk '{printf "%s - %d requests\n", $2, $1}'

######################################################
echo
echo Top 5 response status codes:
grep -E -o 'HTTP/1.1"[ ]*([0-9]{3})[ ]*' $LOG | awk '{print $2}' \
| sort | uniq -c | sort -nr | head -5 \
| awk '{printf "%d - %d requests\n", $2, $1}'

######################################################
echo
echo Top 5 user agents:
awk -F'"' '{print $6}' $LOG | sort | uniq -c | sort -nr | head -5 \
| awk '{count=$1; $1=""; printf "%s - %d requests\n", $0, count}'

```

---

This is based on the project from roadmap.sh [Nginx Log Analyser](https://roadmap.sh/projects/nginx-log-analyser).
