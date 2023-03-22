<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import CheckMark from './icons/CheckMark.vue'
defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  hasText: {
    type: Boolean,
    default: false
  }
})
let toggle = ref(false)
</script>

<template>
  <div class="flex w-full pa-2">
    <div class="w-full">
      <label for="checkboxLabelTwo" class="flex cursor-pointer select-none items-center">
        <div class="relative">
          <input type="checkbox" id="checkboxLabelTwo" class="sr-only" v-model="toggle" />
          <div
            class="box mr-4 flex h-6 w-6 items-center justify-center rounded border bg-[#0A3FAD]"
            :class="[{ 'bg-[#0A3FAD]': toggle === true }, { 'bg-gray': toggle === false }]"
          >
            <CheckMark width="20" height="20" class="text-white"></CheckMark>
          </div>
        </div>
        <span v-if="hasText"> <slot name="text"></slot></span>
      </label>
    </div>
  </div>
</template>
