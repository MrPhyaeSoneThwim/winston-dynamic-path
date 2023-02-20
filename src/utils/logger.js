const winston = require("winston");
function createLogger(logDirectory) {
	return winston.createLogger({
		level: "info",
		format: winston.format.combine(
			winston.format.timestamp({ format: "YYYY-MM-DD hh:mm:ss" }),
			winston.format.json(),
		),
		transports: [
			new winston.transports.File({
				filename: logDirectory + "/error.log",
				level: "error",
			}),
			new winston.transports.File({ filename: logDirectory + "/combined.log" }),
		],
	});
}

module.exports = createLogger;
