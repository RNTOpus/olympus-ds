<script setup>
const props = defineProps(['category', 'tokens', 'type', 'cssProperty', 'orderBy', 'hidePreview'])

const getUsageVariations = variation => {
  return {
    css: `--ods-${props.category}-${!!props.type ? props.type + '-' : ''}${variation}`,
    sass: `$ods-${props.category}-${!!props.type ? props.type + '-' : ''}${variation}`,
    js: `${props.category}${props.type}${variation}`
  }
}

const valueWithRemUnit = value => typeof value === 'string' && value?.includes('rem')

const valueWithoutUnit = value => {
  if (valueWithRemUnit(value)) return value.replace('rem', '')
  return value
}

const overridingStyles = value => {
  switch (props.category) {
    case 'border':
      return {
        width: '100%',
        height: value
      }
    case 'size':
      return {
        width: value,
        height: value
      }
    case 'spacing':
      return {
        width: value,
        height: value,
        background:
          'repeating-linear-gradient(45deg,var(--ods-color-primary-base) 0px,var(--ods-color-primary-base) 10px,var(--ods-color-primary-40) 10px,var(--ods-color-primary-40) 20px)'
      }
    case 'opacity':
      return {
        opacity: value
      }
    case 'radii':
      return {
        borderRadius: value
      }
    case 'time':
      return {
        ...(props.type === 'Transition'
          ? { transitionDuration: value + 'ms' }
          : { transitionDelay: value + 'ms', transitionDuration: '500ms' })
      }
    default:
      break
  }
}

const getTokens = () => {
  return Object.keys(props?.tokens)
    .filter(token => (props.type ? token.includes(props.type) : token))
    .map(token => {
      const value = props.tokens[token]
      const key = token.replace(`${props.category}${props.type}`, '')
      return {
        ...getUsageVariations(key),
        key,
        value,
        displayValue: valueWithRemUnit(value)
          ? `${value} (${Math.round(Number(value.replace('rem', '')) * 16)}px)`
          : value,
        valueWithoutUnit: valueWithoutUnit(value)
      }
    })
    .sort((a, b) => a[props.orderBy || 'key'] - b[props.orderBy || 'key'])
}
</script>

<template>
  <h3 class="title">{{ type }}</h3>
  <section class="tokens-view">
    <div class="row -head" :style="[hidePreview ? { gridTemplateColumns: '1fr 150px' } : {}]">
      <div class="col">Token</div>
      <div class="col">Value</div>
      <div class="col" v-if="!hidePreview">Preview</div>
    </div>
    <div
      class="row"
      v-for="token in getTokens()"
      :key="token.key"
      :style="[hidePreview ? { gridTemplateColumns: '1fr 150px' } : {}]"
    >
      <div class="col">
        {{ token.key }}
        <div class="usage-variation">
          <img src="/icons/css.png" class="icon" alt="CSS" />
          <small>{{ token.css.toLowerCase() }}</small>
        </div>
        <div class="usage-variation">
          <img src="/icons/sass.png" class="icon" alt="SASS" />
          <small>{{ token.sass.toLowerCase() }}</small>
        </div>
        <div class="usage-variation">
          <img src="/icons/js.png" class="icon" alt="javascript" />
          <small>{{ token.js }}</small>
        </div>
      </div>
      <div class="col">
        <small>{{ token.displayValue }}</small>
      </div>
      <div class="col" v-if="!hidePreview">
        <div
          class="example"
          :class="[token.key, props.category]"
          :style="[overridingStyles(token.value)]"
          v-if="category !== 'font'"
        ></div>
        <div class="typography" v-else>
          <p class="family" v-if="type === 'Family'" :style="{ fontFamily: `var(${token.css.toLowerCase()})` }">
            Lorem ipsum dolor sit amet.
          </p>
          <p class="size" v-else-if="type === 'Size'" :style="{ fontSize: token.value }">Aa</p>
          <p class="weight" v-else :style="{ fontWeight: token.value }">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.tokens-view {
  border: thin solid var(--vp-c-divider-light);
  border-radius: 5px;
  margin: 20px 0 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.tokens-view .row {
  display: grid;
  grid-template-columns: 1fr 150px 150px;
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: thin solid var(--vp-c-divider-light);
}

.tokens-view .row.-head {
  border-width: 2px;
}

.tokens-view .row .col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tokens-view .row .col .usage-variation {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tokens-view .row .col .usage-variation .icon {
  width: 15px;
}

.tokens-view .row .col .usage-variation small {
  display: block;
  color: var(--vp-c-text-2);
}

.tokens-view .row .col .example {
  width: 50px;
  height: 50px;
  background-color: var(--ods-color-primary-base);
  position: relative;
}

.tokens-view .row .col .example.Pill {
  width: 100%;
}

.tokens-view .row .col .example.time {
  cursor: pointer;
  width: 100%;
  background: repeating-linear-gradient(
    90deg,
    var(--ods-color-primary-base) 0px,
    var(--ods-color-primary-base) 10px,
    var(--ods-color-primary-40) 10px,
    var(--ods-color-primary-40) 20px
  );
}

.tokens-view .row .col .example.time::after {
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--ods-color-primary-40);
  transition-property: width;
  transition-duration: inherit;
  transition-delay: inherit;
  transition-timing-function: ease-out;
}
.tokens-view .row .col .example.time:hover::after {
  width: 100%;
}

.tokens-view .row .col .typography {
  font-family: var(--ods-font-family-base);
}
</style>
