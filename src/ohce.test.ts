import { describe, expect, it, vi } from "vitest"
import { OHCE } from "./ohce.js"
import { Printer } from "./Printer.js"
import { InitialArguments } from "./InitialArguments.js"

describe(OHCE, () => {
  it("greets the user", () => {
    const printer: Printer = {
      log: vi.fn(),
    }

    const initialArguments: InitialArguments = {
      getUserName: vi.fn(() => "Pepe"),
    }

    new OHCE(initialArguments, printer)

    expect(printer.log).toHaveBeenCalledWith("¡Buenos días Pepe!")
  })
})
