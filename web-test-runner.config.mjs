import { playwrightLauncher } from '@web/test-runner-playwright'
import { esbuildPlugin } from '@web/dev-server-esbuild'
import { fileURLToPath } from 'url'

const jenkins_path = process.env.WORKSPACE

export default {
  rootDir: 'packages/components/src',
  files: ['packages/components/src/**/*.spec.ts'],
  concurrentBrowsers: 3,
  nodeResolve: true,
  playwright: true,
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      launchOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        executablePath: `/usr/bin/chromium-browser`
      }
    }),
    playwrightLauncher({
      product: 'firefox',
      launchOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        executablePath: `/usr/bin/firefox-browser`
      }
    })
    // playwrightLauncher({ product: 'webkit' })
  ],
  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'auto',
      tsconfig: fileURLToPath(new URL('./packages/components/tsconfig.json', import.meta.url))
    })
  ]
}
