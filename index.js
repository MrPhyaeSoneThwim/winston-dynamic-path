const express = require("express");
const createLogger = require("./src/utils/logger");
const app = express();

let logger1 = createLogger(`${__dirname}/logs/log1`);
let logger2 = createLogger(`${__dirname}/logs/log2`);

const PORT = process.env.PORT || 5000;

console.log();

app.get("/log1", (req, res, next) => {
	logger1.log({ level: "info", message: "Message for log 1" });
	logger1.log({ level: "error", message: "Error message for log 1" });
	res.send({ message: "log1" });
});

app.get("/log2", (req, res, next) => {
	logger2.log({ level: "info", message: "Message for log 2" });
	logger2.log({ level: "error", message: "Error message for log 2" });
	res.send({ message: "log2" });
});

app.listen(PORT, () => {
	console.log("server is running");
});
