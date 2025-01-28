// import { Youch } from 'youch'
// import colors from '@poppinss/colors'
// import supportsColor from 'supports-color'
// import { diff as jestDiff } from 'jest-diff'
// import type { ParsedError } from 'youch/types'

// const columns = 80
// const { columns } = process.stdout
// const ansi = colors.ansi() // supportsColor.stdout ? colors.ansi() : colors.silent()
// const pointer = '>' // process.platform === 'win32' && !process.env.WT_SESSION ? '>' : '❯'

/**
 * ErrorsPrinter exposes the API to pretty print errors occurred during
 * tests executed via Japa.
 */
export class ErrorsPrinter {
  /**
   * Displays the error stack for a given error
   */
  async displayErrorStack(_: any) {
    // const ansiOutput = await new Youch().toANSI(error, {
    //   frameSourceBuffer: this.#options.stackLinesCount,
    // })
    // const ansiOutput = error
    // console.error(ansiOutput)
  }

  /**
   * Display chai assertion error
   */
  async displayAssertionError(_: any) {
    // if (error.showDiff) {
    //   console.error()
    // const { actual, expected } = error
    // const diff = jestDiff(expected, actual, {
    //   expand: true,
    //   includeChangeCounts: true,
    // })
    // console.error(diff)
    // }
    // await this.#displayErrorStack(error)
  }

  /**
   * Prints section header with a centered title and
   * borders around it
   */
  // printSectionHeader(title: string) {
  //   const whitspacesWidth = (columns - title.length) / 2
  //   const [lhsWidth, rhsWidth] = Number.isInteger(whitspacesWidth)
  //     ? [whitspacesWidth, whitspacesWidth]
  //     : [whitspacesWidth - 1, whitspacesWidth + 1]

  //   const borderLeft = ansi.red('─'.repeat(lhsWidth - 1))
  //   const borderRight = ansi.red('─'.repeat(rhsWidth))
  //   console.error(`${borderLeft}${ansi.bgRed().black(` ${title} `)}${borderRight}`)
  // }

  /**
   * Parses an error to JSON
   */
  async parseError(_: any) {
    // /**
    //  * Values that are not object objects are not parsed
    //  */
    // if (error === null || Array.isArray(error) || typeof error !== 'object') {
    //   return {
    //     message: String(error),
    //   }
    // }
    // /**
    //  * Assertion error
    //  */
    // if ('actual' in error && 'expected' in error) {
    //   return this.#parseAssertionError(error)
    // }
    // /**
    //  * Parse all other errors using Youch
    //  */
    // return error
  }

  /**
   * Pretty print the error to the console
   */
  async printError(_: any) {
    // if (error === null || Array.isArray(error) || typeof error !== 'object') {
    //   console.error(`Error: ${error}`)
    //   return
    // }
    // /**
    //  * Assertion error
    //  */
    // if ('actual' in error && 'expected' in error) {
    //   await this.displayAssertionError(error)
    //   return
    // }
    // await this.displayErrorStack(error)
  }

  /**
   * Print summary errors
   */
  // async printErrors(errors: { title: string; phase: string; error: any }[]) {
  //   const errorsCount = errors.length
  //   let index = 0

  //   for (let { phase, error, title } of errors) {
  //     const label = phase === 'test' ? title : `${title}: ${this.#getPhaseTitle(phase)}`
  //     console.error()
  //     console.error(`${pointer} ${ansi.underline(label)}`)
  //     await this.printError(error)
  //     this.printSectionBorder(`[${++index}/${errorsCount}]`)
  //   }
  // }
}
