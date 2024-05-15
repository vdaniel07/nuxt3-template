<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-sheet
        v-bind="props"
        :rounded="true"
        :class="`mx-auto d-flex align-center justify-center pointer back-${getColor(item.module)}`"
        height="150"
        :elevation="isHovering ? '10' : '6'"
        width="150"
        @click="navigateTo(item.to)"
      >
        <v-icon size="50">{{ item.icon }}</v-icon>
      </v-sheet>
      <p class="pt-2 mx-auto d-flex align-center justify-center">{{ item.title }}</p>
    </template>
  </v-hover>
</template>

<script setup lang="ts">
import { type IDrawerItem, type TModule } from '../components/layout/drawerItems';
withDefaults(
  defineProps<{
    item: IDrawerItem;
  }>(),
  {
    item: () => ({
      title: 'none',
      icon: 'mdi-alert-circle-outline'
    })
  }
);

const getColor = (module: TModule | undefined) => {
  let color: string = 'blue';
  switch (module) {
    case 'dashboard':
      color = 'blue';
      break;
    case 'action':
      color = 'green';
      break;
    case 'admin':
      color = 'grey';
      break;

    default:
      color = 'blue';
      break;
  }

  return color;
};
</script>

<style scoped></style>
