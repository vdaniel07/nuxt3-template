<template>
  <v-container fill-height fluid>
    <v-row justify="space-around" class="pt-8">
      <v-col
        v-for="(item, i) in items.filter((el) => el.module === 'action')"
        :key="`item-${i}`"
        cols="12"
        md="4"
        class="pb-10"
      >
        <welcome-sheet :item="item" />
      </v-col>
    </v-row>
    <v-row justify="space-around" class="pt-8">
      <v-col
        v-for="(item, i) in items.filter((el) => el.module === 'dashboard')"
        :key="`item-${i}`"
        cols="12"
        md="4"
        class="pb-10"
      >
        <welcome-sheet :item="item" />
      </v-col>
    </v-row>
    <v-row justify="space-around" class="pt-8">
      <v-col
        v-for="(item, i) in items.filter((el) => el.module === 'admin')"
        :key="`item-${i}`"
        cols="12"
        md="4"
        class="pb-10"
      >
        <welcome-sheet :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// definePageMeta({
//   middleware: ['redirect-to-default']
// });
// Get user role
// import { useUserStore } from '~/stores/user';
// const userStore = useUserStore();
// const userRole = computed(() => userStore.getRole);

import { type IDrawerItem, drawerItems } from '../components/layout/drawerItems';
const items: Ref<IDrawerItem[]> = ref(drawerItems);
// const itemsRoles = computed(() => items.value.filter((el) => (el.roles ? el.roles.includes(userRole.value) : true)));
</script>

<style lang="scss" scoped></style>
