<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import CheckMark from './icons/CheckMark.vue'
import XMark from './icons/XMark.vue'
defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
let toggle = ref(false)
</script>

<template>
  <div class="flex w-full pa-2">
    <div class="w-full">
      <label for="toggleThree" class="flex cursor-pointer select-none items-center">
        <div class="relative">
          <input
            type="checkbox"
            id="toggleThree"
            class="sr-only"
            :disabled="disabled"
            v-model="toggle"
          />
          <div
            class="block h-8 w-14 rounded-full bg-[#0A3FAD]"
            :class="{ 'bg-gray': disabled }"
          ></div>
          <div
            class="absolute right-1 top-1 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white transition"
            :class="[
              { 'right-7': toggle === true },
              { 'right-1': toggle === false },
              { 'bg-white': disabled }
            ]"
          >
            <CheckMark width="20" height="20" v-if="!toggle"></CheckMark>
            <XMark width="20" height="20" v-else></XMark>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>
