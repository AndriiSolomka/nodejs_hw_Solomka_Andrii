export default interface ILogger {
  log: (text: string) => void;
  warn: (text: string) => void;
  error: (text: string, err: any) => void;
}
