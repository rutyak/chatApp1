// server.mjs
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Server-side socket.io logic goes here
io.on('connection', (socket) => {
  console.log('A client connected.');
  // Add more socket.io logic as needed
});

const PORT = 9000;
server.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
