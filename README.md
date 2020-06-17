# syno-chat-bot-quick-start

## Quick Start Guide

### clone this porject and install dependency

```
git clone https://github.com/itsPG/syno-chat-bot-quick-start
cd syno-chat-bot-quick-start
yarn install
cd ..
```

### add server.crt / server.key to cert folder

if you don't have a valid certificate, you may generate a self-signed certificate by

```
cd syno-chat-bot-quick-start/cert
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout server.key -out server.crt -days 30
cd ../../
```

however, you *MUST* have a valid certificate in order to be connected by Chat Server

please consider getting a free one from https://letsencrypt.org/

### fill config in index.js

modify

```
'https://YOUR_DS.org:5001/',
'YOUR_CHAT_TOKEN',
```

to your own config

### start server

```
cd syno-chat-bot-quick-start
node index.js
```