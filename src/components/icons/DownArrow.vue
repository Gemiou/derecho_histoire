<script lang="ts">
export default {
  props: {
    width: String,
    height: String
  }
}
</script>

<template>
  <svg :width="width" :height="height" class="fill-current">
    <path
      d="M15.5 20.8C15.1625 20.8 14.8625 20.6875 14.6375 20.4625L7.4375 13.2625C6.95 12.8125 6.95 12.025 7.4375 11.575C7.8875 11.0875 8.675 11.0875 9.125 11.575L15.5 17.9125L21.8375 11.575C22.2875 11.0875 23.075 11.0875 23.525 11.575C24.0125 12.025 24.0125 12.8125 23.525 13.2625L16.325 20.4625C16.1 20.6875 15.8 20.8 15.5 20.8Z"
    />
  </svg>
</template>
