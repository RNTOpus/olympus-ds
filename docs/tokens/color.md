<script setup>
  import * as tokens from '@package/tokens/lib/color.js'
  const types = ['Primary', 'Success', 'Warning', 'Danger', 'Neutral']
</script>

# Color Tokens

<ColorPalette 
  v-for="(type, index) in types" 
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>
