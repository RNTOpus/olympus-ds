<script setup>
  import * as tokens from 'https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/lib/time.js'
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
