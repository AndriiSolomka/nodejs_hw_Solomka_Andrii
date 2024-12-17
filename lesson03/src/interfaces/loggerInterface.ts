export default interface ILogger {
  log: (text: string) => void;
  warn: (text: string) => void;
}
