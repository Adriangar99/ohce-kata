import { InitialArgumentsProcess } from "./InitialArgumentsProcess.js"
import { PrinterConsole } from "./PrinterConsole.js"
import { OHCE } from "./ohce.js"

const initialArguments = new InitialArgumentsProcess()
const printer = new PrinterConsole()
new OHCE(initialArguments, printer)
