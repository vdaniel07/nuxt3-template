<template>
  <v-btn
    v-bind="$attrs"
    icon="mdi-delete"
    size="small"
    variant="tonal"
    color="primary"
    @click="$emit('click', $event)"
  />
</template>

<script setup lang="ts">
defineEmits(['click']);
</script>
