# syno-chat-bot-quick-start

## Quick Start Guide

### clone this porject

```
git clone https://github.com/itsPG/syno-chat-bot-quick-start
```

### add server.crt / server.key to cert folder

if you don't have a valid certificate, you may generate a self-signed certificate by

```
cd syno-chat-bot-quick-start/cert
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout server.key -out server.crt -days 30
```

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