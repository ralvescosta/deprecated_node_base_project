export interface ILogger {
  trace: () => void
  info: () => void
  warn: () => void
  error: () => void
}