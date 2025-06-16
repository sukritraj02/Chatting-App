const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const users = {}; // socket.id -> username

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Socket.io logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("login", (username) => {
    users[socket.id] = username;
    console.log(`🟢 ${username} joined`);
    io.emit("message", { user: "System", text: `${username} joined the chat.` });
  });

  socket.on("UserMessage", (msg) => {
    const username = users[socket.id] || "Anonymous";
    io.emit("message", { user: username, text: msg });
  });

  socket.on("disconnect", () => {
    const name = users[socket.id];
    if (name) {
      console.log(`🔴 ${name} left`);
      socket.broadcast.emit("message", { user: "System", text: `${name} left the chat.` });
      delete users[socket.id];
    }
  });
});

server.listen(9000, () => console.log(`✅ Server running on http://localhost:9000`));
