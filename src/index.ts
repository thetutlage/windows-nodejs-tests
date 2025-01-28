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
  // #options: {
  //   stackLinesCount: number
  //   framesMaxLimit: number
  // }

  // constructor(options?: { stackLinesCount?: number; framesMaxLimit?: number }) {
  //   this.#options = { stackLinesCount: 5, framesMaxLimit: 3, ...options }
  // }

  /**
   * Returns human readable message for error phase
   */
  // #getPhaseTitle(phase: string) {
  //   switch (phase) {
  //     case 'setup':
  //       return 'Setup hook'
  //     case 'setup:cleanup':
  //       return 'Setup hook cleanup function'
  //     case 'teardown':
  //       return 'Teardown hook'
  //     case 'teardown:cleanup':
  //       return 'Teardown hook cleanup function'
  //   }
  // }

  /**
   * Parses the error stack using Youch
   */
  // #parseErrorStack(error: any) {
  //   return error
  //   // return new Youch().toJSON(error, {
  //   //   frameSourceBuffer: this.#options.stackLinesCount,
  //   // })
  // }

  /**
   * Parsers chai assertion error
   */
  // async parseAssertionError(_: any) {
  //   // const parsedError = error
  //   // if (error.showDiff) {
  //   //   console.error()
  //   //   // const { actual, expected } = error
  //   //   // const diff = jestDiff(expected, actual, {
  //   //   //   expand: true,
  //   //   //   includeChangeCounts: true,
  //   //   // })
  //   //   // parsedError.message = `${parsedError.message}\n${diff}`
  //   // }
  //   // return parsedError
  // }

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
}
