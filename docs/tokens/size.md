<script setup>
  import * as tokens from '@package/tokens/lib/size.js'
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
