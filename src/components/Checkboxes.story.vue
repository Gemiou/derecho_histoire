<script lang="ts" setup>
import Checkboxes from './Checkboxes.vue'
</script>

<template>
  <Story title="Checkboxes" :layout="{ type: 'grid', width: '500px' }">
    <Variant title="Checkboxes" auto-props-disabled>
      <Checkboxes :disabled="false" />
      <Checkboxes :disabled="true" />
      <Checkboxes :disabled="true" />
      <Checkboxes :disabled="true" />
    </Variant>
    <Variant title="Checkboxes with text" auto-props-disabled>
      <Checkboxes :disabled="true" :hasText="true">
        <template v-slot:text> Option Copy </template>
      </Checkboxes>
      <Checkboxes :disabled="true" :hasText="true">
        <template v-slot:text> Option Copy </template>
      </Checkboxes>
      <Checkboxes :disabled="true" :hasText="true">
        <template v-slot:text> Option Copy </template>
      </Checkboxes>
      <Checkboxes :disabled="true" :hasText="true">
        <template v-slot:text> Option Copy </template>
      </Checkboxes>
    </Variant>
  </Story>
</template>
