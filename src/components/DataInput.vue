<script lang="ts" setup>
import { defineProps, ref } from 'vue'

import Info from './icons/Info.vue'
import Show from './icons/Show.vue'
import Hide from './icons/Hide.vue'
import Clear from './icons/Clear.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  type: {
    type: String
  },

  counter: {
    type: Number,
    default: 0
  },

  error: {
    type: Boolean,
    default: false
  },
  isPassword: {
    type: Boolean,
    default: true
  },
  info: {
    type: Boolean,
    default: false
  },

  limit: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  }
})
const { type, limit, counter } = props
let isshow = ref(false)
let counter_error = ref(false)

let input_text = ref('')
let input_text_type = ref(type)
const clearInput = () => {
  input_text.value = ''
}
const changeInput = () => {
  if (limit) {
    if (input_text.value.length > counter) {
      counter_error.value = true
    } else {
      counter_error.value = false
    }
  }
}

const updateType = () => {
  if (type === 'password') {
    isshow.value = !isshow.value
    if (input_text_type.value === 'password') {
      input_text_type.value = 'text'
    } else {
      input_text_type.value = 'password'
    }
  }
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

      <div
        class="relative focus-within:text-gray-900 b-solid b-1 b-rd-[5px] light:b-light-red dark:focus-within:text-gray-800"
      >
        <input
          :disabled="disabled"
          v-model="input_text"
          class="pl-2 py-3 w-full placeholder:opacity-100 b-rd-[5px]"
          placeholder="E.g. Wakababa"
          @input="changeInput()"
          :type="input_text_type"
        />

        <div class="absolute right-0 inset-y-1" v-if="type === 'password'">
          <button
            type="button"
            v-if="type === 'password'"
            class="b-none bg-transparent"
            @click="updateType()"
          >
            <Show
              v-if="isshow"
              class="dark:text-dark-primary light:text-light-primary"
              height="30"
              width="30"
            ></Show>
            <Hide
              v-if="!isshow"
              class="dark:text-dark-primary light:text-light-primary"
              height="30"
              width="30"
            >
            </Hide>
          </button>
        </div>
        <div
          class="absolute inset-y-1"
          v-if="input_text !== ''"
          :class="[
            { 'right-7': type === 'password' },
            { 'right-1': type === 'text' },
            { 'left-1': type === 'number' }
          ]"
        >
          <button type="button" class="b-none bg-transparent" @click="clearInput()">
            <Clear
              class="dark:text-dark-primary light:text-light-primary"
              height="30"
              width="30"
            ></Clear>
          </button>
        </div>
      </div>

      <div class="flex justify-end m-t-1" v-if="limit">
        <span class="ml-[5px]">{{ input_text.length }}/{{ counter }} </span>
      </div>
      <p class="light:text-light-error dark:text-dark-error m-t-0" v-if="counter_error">
        This the error message and how you can fix this
      </p>

      <p class="light:text-light-error dark:text-dark-error" v-if="error">
        This the error message and how you can fix this
      </p>
    </div>
  </div>
</template>
