import { playwrightLauncher } from '@web/test-runner-playwright'
import { esbuildPlugin } from '@web/dev-server-esbuild'
import { fileURLToPath } from 'url'

export default {
  rootDir: 'packages/components/src',
  files: ['packages/components/src/**/*.spec.ts'],
  concurrentBrowsers: 3,
  nodeResolve: true,
  playwright: true,
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({
      product: 'firefox',
      launchOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-setuid-sandbox']
      }
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
