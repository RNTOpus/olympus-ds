<script setup>
  import * as tokens from 'https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/lib/zIndex.js'
  const types = [''];
</script>

# Z Index Tokens

<TokenView 
  v-for="(type, index) in types" 
  category="zIndex" 
  orderBy="valueWithoutUnit"
  hide-preview="true"
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>
