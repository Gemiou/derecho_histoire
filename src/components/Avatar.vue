<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return {
      count
    }
  },
  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <button
    class="bg-transparent light:text-light-primary dark:text-red py-2 px-4 b-rd-[80px] b-2 b-solid font-800 dark:b-dark-primary light:b-light-primary hover:cursor-pointer w-max"
  >
    Try again
  </button>
</template>
