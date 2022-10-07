<script setup>
  import * as tokens from 'olympus-ds-design-tokens/lib/radii.js'
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
