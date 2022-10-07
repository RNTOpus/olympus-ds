<script setup>
  const props = defineProps(['lang', 'content' ]);
  async function copyToClipboard() {
    try {
      return navigator.clipboard.writeText(props.content)
    } catch {
      const element = document.createElement('textarea')
      const previouslyFocusedElement = document.activeElement

      element.value = props.content

      // Prevent keyboard from showing on mobile
      element.setAttribute('readonly', '')

      element.style.contain = 'strict'
      element.style.position = 'absolute'
      element.style.left = '-9999px'
      element.style.fontSize = '12pt' // Prevent zooming on iOS

      const selection = document.getSelection()
      const originalRange = selection
        ? selection.rangeCount > 0 && selection.getRangeAt(0)
        : null

      document.body.appendChild(element)
      element.select()

      // Explicit selection workaround for iHTMLElementOS
      element.selectionStart = 0
      element.selectionEnd = text.length

      document.execCommand('copy')
      document.body.removeChild(element)

      if (originalRange) {
        selection.removeAllRanges() // originalRange can't be truthy when selection is falsy
        selection.addRange(originalRange)
      }

      // Get the focus back on the previously focused element, if any
      if (previouslyFocusedElement) {
        previouslyFocusedElement.focus()
      }
  }
}
</script>

<template>
  <div :class="'language-'+ lang">
    <button class="copy" @click="copyToClipboard"></button>
    <span class="lang">{{lang}}</span>
    <highlightjs :language='lang' :code="content" />
  </div>
</template>

<style>
  .tab {
    display: none;
  }
  .tab.active {
    display: block;
  }
  .vp-doc pre[class*='language-'] {
    position: relative;
    margin: 16px -24px;
    background-color: var(--vp-code-block-bg);
    overflow-x: auto;
    transition: background-color 0.5s;
  }
</style>
