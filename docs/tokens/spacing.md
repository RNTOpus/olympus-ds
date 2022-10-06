<script setup>
  import * as tokens from 'https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/lib/spacing.js'
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
