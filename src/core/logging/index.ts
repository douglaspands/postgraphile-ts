import { createLogger, format, transports, Logger } from 'winston';
import config from '@config';

function getLogger(name: string): Logger {
    return createLogger({
        level: config.LOG_LEVEL,
        format: format.combine(
            format.errors({ stack: true }),
            format.colorize(),
            format.label({ label: name }),
            format.timestamp(),
            format.printf(({ level, message, label, timestamp }): string => {
                return `${timestamp} [${label}] ${level}: ${message}`;
            }),
        ),
        transports: [new transports.Console()],
    });
}

export default { getLogger };
