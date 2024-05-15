<template>
  <v-alert
    closable
    density="compact"
    elevation="8"
    :variant="notification.variant"
    :type="notification.type"
    :text="notification.text"
    :title="notification.time.toLocaleString()"
  >
    <template #close>
      <v-btn icon="mdi-close" @click="$emit('close')" />
    </template>
  </v-alert>
</template>

<script setup lang="ts">
// Notification code base on https://github.com/kingyue737/vitify-next

import type { INotification } from '@/stores/notification';

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    notification: INotification;
  }>(),
  { modelValue: false }
);
const emit = defineEmits(['update:modelValue', 'close']);

let timerId: ReturnType<typeof setTimeout>;
const startTimeout = () => {
  if (props.notification.timeout > 0) {
    timerId = setTimeout(() => {
      stopTimeout(timerId);
    }, props.notification.timeout);
  }
};
const stopTimeout = (timerId: ReturnType<typeof setTimeout>) => {
  clearTimeout(timerId);
  emit('update:modelValue', false);
  emit('close');
};
onMounted(() => startTimeout());
</script>

<style scoped>
:deep(.v-alert-title) {
  line-height: 1.25rem;
  font-size: 14px;
  font-weight: 300;
}
</style>
