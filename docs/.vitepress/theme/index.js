import DefaultTheme from 'vitepress/theme'
import './styles/main.css'
import BlockCode from './components/BlockCode.vue'
import ColorPalette from './components/ColorPalette.vue'
import Frameworks from './components/Frameworks.vue'
import Preview from './components/Preview.vue'
import Tab from './components/Tab.vue'
import Tabs from './components/Tabs.vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlockCode', BlockCode),
      app.component('ColorPalette', ColorPalette),
      app.component('Frameworks', Frameworks),
      app.component('Preview', Preview),
      app.component('Tab', Tab),
      app.component('Tabs', Tabs)
  }
}
