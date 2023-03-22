<script lang="ts" setup>
import DropDown from './DropDown.vue'
</script>

<template>
  <Story title="DropDown" :layout="{ type: 'grid', width: '500px' }">
    <Variant title="DropDown" auto-props-disabled>
      <DropDown :disabled="false" :error="false" :info="true" />
    </Variant>
  </Story>
</template>
