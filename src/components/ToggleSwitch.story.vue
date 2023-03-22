<script lang="ts" setup>
import ToggleSwitch from './ToggleSwitch.vue'
</script>

<template>
  <Story title="Toggle Switch" :layout="{ type: 'grid', width: '500px' }">
    <Variant title="Toggle Switch" auto-props-disabled>
      <ToggleSwitch :disabled="false" />
      <ToggleSwitch :disabled="true" />
    </Variant>
  </Story>
</template>
