<script setup>
  import * as tokens from 'https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/lib/font.js'
  const types = ['Family', 'Size', 'Weight'];
</script>

# Typography Tokens

<TokenView 
  v-for="(type, index) in types" 
  category="font" 
  orderBy="valueWithoutUnit"
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>
