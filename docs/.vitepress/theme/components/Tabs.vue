<script setup>
    import { ref, onMounted, reactive } from 'vue';
    const props = defineProps([ 'customClass' ]);

    let tabContainer = ref(null);
    let tabHeaders = ref(null);
    let tabs = ref(null);
    let activeTabIndex = ref(0);

    onMounted(() => {
        tabs.value = [ ...tabContainer.value.querySelectorAll('.tab') ];
        for(let x of tabs.value) {
            if(x.classList.contains('active')) {
                activeTabIndex = tabs.value.indexOf(x);
            }
        }
    });

    const changeTab = (index) => {
        // Set activeTabIndex item to the index of the element clicked
      activeTabIndex = index;
          // Remove any active classes
      for(let x of [...tabs.value, ...tabHeaders.value]) {
        x.classList.remove('active')
      }
          // Add active classes where appropriate, to the active elements!
      tabs.value[activeTabIndex].classList.add('active')
      tabHeaders.value[activeTabIndex].classList.add('active')
    }

</script>

<template>
    <div id="tabs-container" :class="customClass" ref="tabContainer">
        <div id="tab-headers">
        <ul>
            <li v-for="(tab, index) in tabs" :key="index" :class="activeTabIndex == index ? 'active' : ''" @click="changeTab(index)" ref="tabHeaders">{{tab.title}}</li>
        </ul>
        </div>
        <div id="active-tab">
            <slot></slot>
        </div>
    </div>
</template>

<style>
    #tab-headers ul {
        margin: 0;
        padding: 0;
        display: flex;
        border-bottom: 1px solid var(--vp-c-divider-light);
    }
    #tab-headers ul li {
        list-style: none;
        padding: 1rem 1.25rem;
        position: relative;
        cursor: pointer;
        margin: 0;
        font-size: 12px;
    }
    #tab-headers ul li.active {
        color: var(--vp-c-brand);
        font-weight: bold;
    }

    #tab-headers ul li.active:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 2px;
        width: 100%;
        background: var(--vp-c-brand);
    }
    #active-tab, #tab-headers {
        width: 100%;
    }

    #active-tab {
        padding: 0.75rem;
    }
</style>

