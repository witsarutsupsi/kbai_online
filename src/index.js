import unity from './components/Unity.vue'

const install = Vue => {
  Vue.component('unity', unity)
}

unity.install = install

// export const Unity = unity

export default unity
