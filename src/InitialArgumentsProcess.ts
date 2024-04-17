import { InitialArguments } from "./InitialArguments.js"

export class InitialArgumentsProcess implements InitialArguments {
  getUserName(): string {
    return process.argv[2]
  }
}
