<script lang="ts" setup>
import Avatar from './Avatar.vue'
</script>

<template>
  <Story title="MyStory">
    <Variant title="MyVariant 1">
      <Avatar argument="hello" />
    </Variant>
    <Variant title="MyVariant 2">
      <Avatar argument="world" />
    </Variant>
  </Story>
</template>
