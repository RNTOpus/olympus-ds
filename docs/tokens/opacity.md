<script setup>
  import * as tokens from '@package/tokens/lib/opacity.js'
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
