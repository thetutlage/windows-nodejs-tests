import test from 'node:test'
import swcCore from '@swc/core'
import { fileURLToPath } from 'node:url'

test('Errors printer', async () => {
  console.log(
    await swcCore.transformFile(fileURLToPath(new URL('../src/index.ts', import.meta.url)), {
      sourceMaps: 'inline',
      module: {
        type: 'es6',
        strictMode: true,
        noInterop: false,
      },
      jsc: {
        externalHelpers: false,
        target: 'esnext',
        parser: {
          syntax: 'typescript',
          tsx: true,
          decorators: true,
          dynamicImport: true,
        },
        transform: {
          legacyDecorator: true,
          decoratorMetadata: false,
          react: {
            throwIfNamespace: false,
            useBuiltins: false,
            pragma: 'React.createElement',
            pragmaFrag: 'React.Fragment',
            importSource: 'react',
          },
        },
        keepClassNames: true,
      },
    })
  )
})
