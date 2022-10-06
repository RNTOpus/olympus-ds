<script setup>
  import * as tokens from 'https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/lib/opacity.js'
  const types = ['Level'];
</script>

# Opacity Tokens

<TokenView 
  v-for="(type, index) in types" 
  category="opacity" 
  orderBy="valueWithoutUnit"
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>
