import { createLogger, format, transports, Logger } from "winston";

function getLogger(name: string): Logger {
    return createLogger({
        level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL.toLowerCase() : "info",
        format: format.combine(
            format.colorize(),
            format.label({ label: name }),
            format.timestamp(),
            format.printf(({ level, message, label, timestamp }): string => {
                return `${timestamp} [${label}] ${level}: ${message}`;
            })
        ),
        transports: [new transports.Console()]
    });
}

export default { getLogger };