<script setup>
  import * as tokens from '@package/tokens/lib/spacing.js'
  const types = [''];
</script>

# Size Tokens

<TokenView 
  v-for="(type, index) in types" 
  category="spacing"
  orderBy="valueWithoutUnit"
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>
