<script setup>
  import * as tokens from 'olympus-ds-design-tokens/lib/border.js'
  const types = ['Stroke'];
</script>

# Border Tokens

<TokenView 
  v-for="(type, index) in types" 
  category="border"
  orderBy="valueWithoutUnit"
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>
