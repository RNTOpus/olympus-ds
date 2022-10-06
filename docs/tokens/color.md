<script setup>
  import * as tokens from 'https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/lib/color.js'
  const types = ['Primary', 'Success', 'Warning', 'Danger', 'Neutral']
</script>

# Color Tokens

<ColorPalette 
  v-for="(type, index) in types" 
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>
