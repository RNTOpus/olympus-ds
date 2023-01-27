import { playwrightLauncher } from '@web/test-runner-playwright'
import { esbuildPlugin } from '@web/dev-server-esbuild'
import { fileURLToPath } from 'url'

export default {
  rootDir: 'packages/components/src',
  files: ['packages/components/src/**/*.spec.ts'],
  concurrentBrowsers: 1,
  nodeResolve: true,
  playwright: true,
  browserStartTimeout: 50000,
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({
      product: 'firefox',
      launchOptions: {}
    }),
    playwrightLauncher({ product: 'webkit' })
  ],
  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'auto',
      tsconfig: fileURLToPath(new URL('./packages/components/tsconfig.json', import.meta.url))
    })
  ]
}
