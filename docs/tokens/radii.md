<script setup>
  import * as tokens from 'https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/lib/radii.js'
  const types = [''];
</script>

# Radii Tokens

<TokenView 
  v-for="(type, index) in types" 
  category="radii" 
  orderBy="valueWithoutUnit"
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>
