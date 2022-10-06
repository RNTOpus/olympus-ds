<script setup>
  import * as tokens from 'https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/lib/size.js'
  const types = [''];
</script>

# Size Tokens

<TokenView 
  v-for="(type, index) in types" 
  category="size" 
  orderBy="valueWithoutUnit"
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>
