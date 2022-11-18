<script setup>
  import * as tokens from 'olympus-ds-design-tokens/lib/time.js'
  const types = ['Transition', 'Delay'];
</script>

# Time Tokens

<TokenView 
  v-for="(type, index) in types" 
  category="time" 
  orderBy="valueWithoutUnit"
  :tokens="tokens"
  :key="index" 
  :type="type" 
/>