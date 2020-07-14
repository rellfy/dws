const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const Watcher = require("./Watcher.js");
const Server = require("./Server.js");

const configPath = path.resolve(__dirname, "config.json");
const config =  JSON.parse(fs.readFileSync(configPath, "utf8"));

if (config.server.enabled)
    startServer();

if (config.watcher.enabled)
    startWatcher()

function startServer() {
    config.server.folder = path.resolve(configPath, config.server.path);
    new Server(config.server);
}

function startWatcher() {
    config.watcher.from = path.resolve(configPath, config.watcher.from);
    config.watcher.to = path.resolve(configPath, config.watcher.to);
    new Watcher(config.watch);
}