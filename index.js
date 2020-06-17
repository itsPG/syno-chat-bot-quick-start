const fs = require('fs');
const express = require('express');
const https = require('https');

const { SynoChatBot } = require('syno-chat-bot');

const privateKey  = fs.readFileSync(`${__dirname}/cert/server.key`, 'utf8');
const certificate = fs.readFileSync(`${__dirname}/cert/server.crt`, 'utf8');
const credentials = { key: privateKey, cert: certificate };
const SERVER_PORT = 3003;

const app = express();
const chatBot = new SynoChatBot(
  'https://YOUR_DS.org:5001/',
  'YOUR_CHAT_TOKEN',
  app,
  `https://localhost:${SERVER_PORT}/`,
  '/',
  (payload, action) => {
    action.send(JSON.stringify(payload));
  }
);
const httpsServer = https.createServer(credentials, app);

console.log(`listening on port ${SERVER_PORT}`);
httpsServer.listen(SERVER_PORT);