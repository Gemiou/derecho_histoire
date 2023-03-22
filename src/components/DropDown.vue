<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import DownArrow from './icons/DownArrow.vue'
import Info from './icons/Info.vue'
const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  init: Object,
  items: Array,

  error: {
    type: Boolean,
    default: false
  },
  info: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const { init } = props
const emit = defineEmits(['handleClick'])
let isshow = ref(false)
const handleClick = (item: any) => {
  isshow.value = false
  init.value.text = item.text
  init.value.value = item.value
  emit('handleClick', item)
}
</script>

<template>
  <div class="flex w-full pa-2">
    <!-- trigger button -->
    <div class="w-full">
      <div class="flex justify-between">
        <div>
          <span class="dark:text-dark-text light:text-light-text font-700 body-text">{{
            title
          }}</span>
        </div>
        <div v-if="info">
          <span class="ml-[5px]"
            ><Info
              class="dark:text-dark-primary light:text-light-primary"
              height="20"
              width="20"
            ></Info>
          </span>
        </div>
      </div>
      <button
        type="button"
        @click="isshow = !isshow"
        class="flex w-full items-center justify-between rounded bg-white p-3 ring-1 ring-gray-300"
      >
        <span>Value/Placeholder</span>
        <span class="text-2xl w-5 h-5 grid place-content-center">
          <DownArrow
            class="dark:text-dark-primary light:text-light-primary"
            height="30"
            width="30"
          ></DownArrow
        ></span>
      </button>
    </div>
    <!-- list items -->
    <div
      class="z-2 absolute mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300 list-none"
      v-if="isshow"
    >
      <li class="cursor-pointer select-none p-2 hover:bg-gray-200" @click="handleClick('Python')">
        Python
      </li>
      <li class="cursor-pointer select-none p-2 hover:bg-gray-200" @click="handleClick('PHP')">
        PHP
      </li>
      <li class="cursor-pointer select-none p-2 hover:bg-gray-200" @click="handleClick('C#')">
        C#
      </li>
    </div>
  </div>
</template>
