<template>
  <v-navigation-drawer :rail="mini" :expand-on-hover="mini" width="220" permanent fixed app>
    <template #prepend>
      <v-list density="compact" nav height="48" class="pa-0">
        <v-list-item class="pl-2 CompanyLogo pointer" @click="navigateTo('/')">
          <template #prepend>
            <v-avatar image="/nuxt.svg" size="40"></v-avatar>
          </template>
          <v-list-item-title class="text-h5 text-grey-darken-2 font-weight-black font-italic" style="line-height: 2rem">
            Company
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
    <v-divider />

    <v-list density="compact" nav>
      <template v-for="(item, i) in items" :key="`item-${i}`">
        <!-- Headers -->
        <v-list-subheader
          v-if="item.heading"
          :key="`heading-${i}`"
          class="text-button font-italic"
          :title="item.heading"
        />
        <v-divider v-else-if="item.divider" :key="`divider-${i}`" class="mt-0 mb-3 ml-1 mr-n1" />

        <!-- Items -->
        <layout-drawer-item :item="item" />
      </template>
    </v-list>

    <!-- Footer-->
    <template #append>
      <div class="pa-2">
        <v-alert class="pa-0 mb-1 text-body-2" density="compact" variant="text" color="primary">
          <div v-if="!mini" class="text-center">version: {{ vers }}</div>
          <div v-else class="text-center">
            {{ vers }}
          </div>
        </v-alert>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
// Navigation drawer scss code base on https://github.com/kingyue737/vitify-next

import { version } from '../../package.json';
import { type IDrawerItem, drawerItems } from './drawerItems';
// import { useTheme } from 'vuetify';

// Declartion
// const theme = useTheme();
const vers = ref(version);
const items: Ref<IDrawerItem[]> = ref(drawerItems);

// Props
withDefaults(defineProps<{ mini: boolean }>(), { mini: false });
</script>

<style lang="scss" scoped>
.CompanyLogo .img {
  height: 26px;
  width: 26px;
  vertical-align: sub;
  margin-left: 4px;
}
.v-navigation-drawer {
  &.v-navigation-drawer--rail {
    &:not(.v-navigation-drawer--is-hovering) {
      .v-list-group {
        --list-indent-size: 0px;
        --prepend-width: 0px;
      }
    }
  }
  .v-navigation-drawer__content {
    overflow-y: hidden;
    &:hover {
      overflow-y: overlay;
    }
  }
  .v-list-group {
    // --list-indent-size: 10px;
    --prepend-width: 10px;
  }
  .v-list-item {
    transition: all 0.2s;
  }
}
</style>
