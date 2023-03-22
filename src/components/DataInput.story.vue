<script lang="ts" setup>
import DataInput from './DataInput.vue'
</script>

<template>
  <Story title="Data input" :layout="{ type: 'grid', width: '500px' }">
    <Variant title="Password" auto-props-disabled>
      <DataInput :disabled="false" :error="false" :info="true" type="password" />
      <DataInput :disabled="false" :error="true" :info="false" type="password" />
      <DataInput :disabled="true" :error="false" :info="false" type="password" />
    </Variant>
    <Variant title="Text Limited" auto-props-disabled>
      <DataInput
        :disabled="false"
        :error="false"
        :info="true"
        :limit="true"
        :counter="42"
        type="text"
      />
      <DataInput
        :disabled="false"
        :error="false"
        :info="true"
        :limit="true"
        :counter="42"
        type="text"
      />
    </Variant>
    <Variant title="Text Input" auto-props-disabled>
      <DataInput
        :disabled="false"
        :error="false"
        :info="true"
        :limit="false"
        :counter="42"
        type="text"
      />
      <DataInput
        :disabled="true"
        :error="false"
        :info="true"
        :limit="false"
        :counter="42"
        type="text"
      />
    </Variant>
    <Variant title="Numerical Input" auto-props-disabled>
      <DataInput
        :disabled="false"
        :error="false"
        :info="true"
        :limit="false"
        :counter="42"
        type="number"
      />
      <DataInput
        :disabled="true"
        :error="false"
        :info="true"
        :limit="false"
        :counter="42"
        type="number"
      />
    </Variant>
  </Story>
</template>
