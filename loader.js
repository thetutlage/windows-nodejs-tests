import { transformSync } from '@swc/core'

export async function initialize() {}
export async function resolve(specifier, context, nextResolve) {
  return nextResolve(specifier, context)
}

export async function load(url, context, nextLoad) {
  const { source } = await nextLoad(url, context)

  const { code, map } = transformSync(source.toString(), {
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
  })

  let output = code
  if (map) {
    const base64SourceMap = Buffer.from(map).toString('base64')
    output = `${code}\n\n//# sourceMappingURL=data:application/json;base64,${base64SourceMap}\n\n//# sourceURL=${url}`
  }

  console.log(output)
  return {
    format: 'module',
    source: `${output}`,
  }
}
