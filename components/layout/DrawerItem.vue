<template>
  <v-list-item
    v-if="isItem && icon"
    v-show="isShow"
    :to="item.to || visibleChildren?.[0].to"
    :prepend-icon="icon"
    active-class="bg-menu text-white"
  >
    <v-list-item-title class="font-weight-bold text-subtitle-2">{{ title }}</v-list-item-title>
  </v-list-item>
  <v-list-group v-else-if="icon" :prepend-icon="icon" active-color="primary">
    <template #activator="{ props: propsGroup }">
      <v-list-item v-bind="propsGroup">
        <v-list-item-title class="font-weight-bold text-subtitle-2">{{ title }}</v-list-item-title>
      </v-list-item>
    </template>
    <LayoutDrawerItem v-for="child in visibleChildren" :key="child.to" :item="child" />
  </v-list-group>
</template>

<script setup lang="ts">
// Navigation drawer item code base on https://github.com/kingyue737/vitify-next
import type { IDrawerItem } from './drawerItems';
import { useUserStore } from '~/stores/user';

// Props
const props = defineProps<{ item: IDrawerItem }>();

// Get user role
const userStore = useUserStore();
const userRole = computed(() => userStore.getRole);

// Set values
const isItem = computed(() => !props.item.subItems || visibleChildrenNum.value <= 1);
const icon = computed(() => props.item.icon || undefined);
const title = computed(() => props.item.title || '');
const visibleChildren = computed(() => props.item.subItems?.filter((child) => child.icon));
const visibleChildrenNum = computed(() => visibleChildren.value?.length || 0);

const isShow = computed(() => {
  let result = true;
  if (props.item.roles) {
    result = props.item.roles.includes(userRole.value);
  }
  return result;
});
</script>

<style lang="scss" scoped></style>
