const express = require("express");
const http = require("node:http");
const WebSocket = require("ws");
const path = require("node:path")

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

const APP_PORT = process.env.PORT || 3000
const APP_URL = process.env.URL || `http://localhost:${APP_PORT}`

app.use("/", express.static(path.join(__dirname, 'public')))
// app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'public', "index.html")))
app.get("/admin", (req, res) => res.sendFile(path.join(__dirname, 'public', "admin.html")))

console.log(__dirname)

server.listen(APP_PORT, () =>
    console.log(`Servidor ouvindo a porta ${APP_PORT}`)
)