<script setup>
  import * as tokens from '@package/tokens/lib/font.js'
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
