<script setup>
  import * as tokens from 'olympus-ds-design-tokens/lib/zIndex.js'
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
