<template>
  <teleport to="body">
    <v-card width="500" class="d-flex flex-column notification-card">
      <v-slide-y-reverse-transition tag="div" class="d-flex flex-column notification-box" group hide-on-leave>
        <div v-for="notification in notificationsShown" :key="notification.id" class="notification-item-wrapper">
          <layout-notification-item
            v-model="notification.show"
            :notification="notification"
            class="notification-item"
            @close="deleteNotification(notification.id)"
          />
        </div>
      </v-slide-y-reverse-transition>
    </v-card>
  </teleport>
</template>

<script setup lang="ts">
// Notification code base on https://github.com/kingyue737/vitify-next

import { useNotificationStore } from '~/stores/notification';
const notificationStore = useNotificationStore();
const notifications = computed(() => notificationStore.notifications);
const notificationsShown = computed(() => notifications.value.filter((notification) => notification.show).reverse());
function deleteNotification(id: number) {
  notificationStore.delNotification(id);
}
</script>

<style lang="scss" scoped>
.notification-item {
  width: 100%;
  border: 0;
}
.notification-card {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  // right: 15px;
  // top: 78px;
  bottom: 48px;
  max-height: 100vh;
  overflow: visible;
  visibility: hidden;
}
.notification-box {
  overflow-y: visible;
  visibility: visible;
  pointer-events: none;
  .notification-item {
    pointer-events: initial;
    user-select: initial;
    margin-bottom: 10px;
  }
}
</style>
