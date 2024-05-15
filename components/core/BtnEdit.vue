<template>
  <v-btn
    v-bind="$attrs"
    class="mr-2"
    icon="mdi-pencil"
    size="small"
    variant="tonal"
    color="primary"
    @click="$emit('click', $event)"
  />
</template>

<script setup lang="ts">
defineEmits(['click']);
</script>
