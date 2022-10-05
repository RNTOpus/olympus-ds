import DefaultTheme from 'vitepress/theme'
import Preview from '../components/Preview.vue'
import Tab from '../components/Tab.vue'
import Tabs from '../components/Tabs.vue'
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import BlockCode from '../components/BlockCode.vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Preview', Preview),
      app.component('Tab', Tab),
      app.component('Tabs', Tabs),
      app.component('CodeHighlight', CodeHighlight),
      app.component('BlockCode', BlockCode)
  }
}
