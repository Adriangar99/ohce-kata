import { InitialArguments } from "./InitialArguments.js"
import { Printer } from "./Printer.js"

export class OHCE {
  constructor(
    private readonly initialArguments: InitialArguments,
    private readonly printer: Printer,
  ) {
    this.printer.log(`¡Buenos días ${this.initialArguments.getUserName()}!`)
  }
}
