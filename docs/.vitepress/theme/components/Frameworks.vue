<template>
  <div class="frameworks">
    <a class="item" href="/frameworks/angular" title="Olympus | framework Angular">
      <img src="/icons/angular.png" alt="Angular icon" />
    </a>
    <a class="item" href="/frameworks/react" title="Olympus | framework React">
      <img src="/icons/react.svg" alt="React icon" />
    </a>
    <a class="item" href="/frameworks/vue" title="Olympus | framework Vue">
      <img src="/icons/vue.svg" alt="Vue icon" />
    </a>
    <a class="item" href="/frameworks/svelte" title="Olympus | framework Svelte">
      <img src="/icons/svelte.svg" class="svelte-icon" alt="Svelte icon" />
    </a>
  </div>
</template>

<style>
.frameworks {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
}

.frameworks .item img {
  height: 80px;
  margin: 0 auto;
}
</style>
