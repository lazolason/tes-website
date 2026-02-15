/**
 * Simple logger utility for the Mexel website
 * In production, this can be extended to send logs to a service like Sentry, LogRocket, etc.
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  level: LogLevel;
  message: string;
  data?: unknown;
  timestamp: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private formatMessage(level: LogLevel, message: string, data?: unknown): LogEntry {
    return {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  }

  info(message: string, data?: unknown): void {
    const entry = this.formatMessage('info', message, data);

    if (this.isDevelopment) {
      console.log(`[INFO] ${entry.timestamp} - ${message}`, data || '');
    }

    // In production, send to logging service
    // Example: sendToSentry(entry);
  }

  warn(message: string, data?: unknown): void {
    const entry = this.formatMessage('warn', message, data);

    if (this.isDevelopment) {
      console.warn(`[WARN] ${entry.timestamp} - ${message}`, data || '');
    }

    // In production, send to logging service
  }

  error(message: string, error?: unknown): void {
    const entry = this.formatMessage('error', message, error);

    // Always log errors to console
    console.error(`[ERROR] ${entry.timestamp} - ${message}`, error || '');

    // In production, send to error tracking service like Sentry
    // Example: Sentry.captureException(error);
  }

  debug(message: string, data?: unknown): void {
    if (this.isDevelopment) {
      const entry = this.formatMessage('debug', message, data);
      console.debug(`[DEBUG] ${entry.timestamp} - ${message}`, data || '');
    }
  }
}

export const logger = new Logger();
