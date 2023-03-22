<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import Search from './icons/Search.vue'
import Clear from './icons/Clear.vue'
defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  error: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  }
})
let input_text = ref('')
const clearInput = () => {
  input_text.value = ''
}
</script>

<template>
  <div class="flex w-full pa-2">
    <div class="w-full">
      <div class="flex justify-between">
        <div>
          <span class="dark:text-dark-text light:text-light-text font-700 body-text">{{
            title
          }}</span>
        </div>
      </div>

      <div
        class="relative focus-within:text-gray-900 b-solid b-1 b-rd-[5px] light:b-light-red dark:focus-within:text-gray-800"
      >
        <input
          :disabled="disabled"
          v-model="input_text"
          class="w-full placeholder:opacity-100 b-rd-[5px] p-2 py-3"
          placeholder="E.g. Wakababa"
          type="text"
        />

        <div class="absolute right-0 inset-y-1">
          <button type="button" class="b-none bg-transparent">
            <Search
              class="dark:text-dark-primary light:text-light-primary"
              height="30"
              width="30"
            ></Search>
          </button>
        </div>
        <div class="absolute inset-y-1 right-10 w-0.5 h-[80%] bg-gray-600"></div>

        <div class="absolute inset-y-1 right-10" v-if="input_text !== ''">
          <button type="button" class="b-none bg-transparent" @click="clearInput()">
            <Clear
              class="dark:text-dark-primary light:text-light-primary"
              height="30"
              width="30"
            ></Clear>
          </button>
        </div>
      </div>

      <p class="light:text-light-error dark:text-dark-error" v-if="error">
        This the error message and how you can fix this
      </p>
    </div>
  </div>
</template>
