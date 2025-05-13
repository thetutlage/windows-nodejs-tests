import { transformSync } from '@swc/core'

export async function initialize() {}
export async function resolve(specifier, context, nextResolve) {
  return nextResolve(specifier, context)
}

export async function load(url, context, nextLoad) {
  const { source } = await nextLoad(url, context)

  const code = transformSync(source.toString(), {
    sourceMaps: true,
    module: {
      type: 'es6',
    },
    jsc: {
      target: 'esnext',
      parser: {
        syntax: 'typescript',
      },
    },
  }).code

  console.log({ code })
  return {
    format: 'module',
    source: code,
  }
}
