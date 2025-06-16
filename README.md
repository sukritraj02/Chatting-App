# 💬 Real-Time Multi-User Chat App

A real-time chat application built using **Node.js**, **Express**, and **Socket.IO**, enabling multiple users to communicate instantly without page reloads. This project demonstrates the power of WebSockets and event-driven architecture using Socket.IO.

---

## 🚀 Features

- Real-time communication between users
- Set and display custom usernames
- Join and leave notifications
- Simple and clean user interface
- No database or login system — pure socket-based interaction

---

## 🛠️ Tech Stack

- **Node.js** – Backend runtime environment
- **Express.js** – Handles HTTP requests and serves static files
- **Socket.IO** – Enables real-time bi-directional communication via WebSockets
- **HTML/CSS** – Frontend interface
- **Vanilla JavaScript** – Client-side interactivity

---

## 📂 Project Structure

- `index.js`: Main server file that initializes the Express app and Socket.IO server.
- `public/index.html`: Frontend UI for chatting.
- `public/style.css`: Styles for the UI (optional).
- `package.json`: Node.js project dependencies.

---

## 📡 How Socket.IO Powers Real-Time Chat

- Users are connected via WebSockets using Socket.IO.
- When a user enters a name and sends a message:
  - The message is emitted to the server.
  - The server broadcasts this message to all connected clients in real time.
- When users join or leave, everyone in the room is notified instantly.
- Socket.IO manages all socket connections and disconnections automatically.

---

## 🧪 How to Run

1. Clone the repository
2. Install dependencies via `npm install`
3. Start the server using `node index.js`
4. Open `http://localhost:9000` in your browser
5. Chat in real-time with multiple users (open in different tabs or browsers)

---

## 🔍 Highlights

- 🔁 **No Page Reloads**: All messages and updates happen live using sockets.
- ⚙️ **Event-Driven**: Socket.IO listens for custom events like `new-user`, `UserMessage`, and `disconnect`.
- 🧠 **In-Memory Users**: Users are tracked temporarily in memory for simplicity.

---

## 📸 Screenshots

_Add screenshots of your application running in the browser._

---

## 🔮 Future Improvements

- Add typing indicators
- Maintain user list
- Private messaging support
- Chat persistence using a database (e.g., MongoDB)
- Mobile responsive UI

---

## 🧑‍💻 Author

Made with ❤️ by SUKRIT RAJ (https://github.com/sukritraj02)

---

## 📜 License

This project is licensed under the MIT License. Feel free to fork, contribute, and build upon it.
