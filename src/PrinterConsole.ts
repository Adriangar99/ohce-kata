import { Printer } from "./Printer.js"

export class PrinterConsole implements Printer {
  log(message: string): void {
    throw new Error("Method not implemented.")
  }
}
