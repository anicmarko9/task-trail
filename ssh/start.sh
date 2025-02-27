#!/bin/sh
/usr/sbin/sshd -D &
cd /home/app
node ./standalone/server.js
