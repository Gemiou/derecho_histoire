<script lang="ts" setup>
import SearchInput from './SearchInput.vue'
</script>

<template>
  <Story title="Search input" :layout="{ type: 'grid', width: '500px' }">
    <Variant title="SearchInput" auto-props-disabled>
      <SearchInput :disabled="false" :error="false" />
      <SearchInput :disabled="true" :error="false" />
    </Variant>
  </Story>
</template>
