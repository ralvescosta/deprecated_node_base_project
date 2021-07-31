export default interface ILogger {
  trace: (d: any) => void
  info: (d: any) => void
  warn: (d: any) => void
  error: (d: any) => void
}
