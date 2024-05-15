<template>
  <v-app-bar app density="compact" style="z-index: 1001">
    <v-btn icon class="ml-0" @click.stop="onClickMini">
      <v-icon>mdi-{{ `menu${mini ? '' : '-open'}` }}</v-icon>
    </v-btn>
    <v-spacer />
    <v-app-bar-title class="header-title text-primary flex text-center"> {{ title }} tools </v-app-bar-title>
    <v-spacer />
    <v-btn icon class="mr-1" @click="toggleTheme">
      <v-icon>mdi-{{ `invert-colors${theme.global.current.value.dark ? '' : '-off'}` }}</v-icon>
    </v-btn>
    <!-- <v-menu location="bottom end" width="300">
      <template #activator="{ props: propsNotif }">
        <v-btn v-bind="propsNotif" icon>
          <v-badge content="2" color="error">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list nav dense>
        <v-list-item color="primary">
          <template #prepend><v-icon>mdi-bell-alert-outline</v-icon></template>
          <v-list-item-title class="font-weight-bold text-subtitle-1">Nouvelle version 1.4.0 !!!</v-list-item-title>
          <v-list-item-subtitle>- Ajout Kitting</v-list-item-subtitle>
          <v-list-item-subtitle>- Ajout notifications</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-menu> -->
    <v-menu>
      <template #activator="{ props: propsBtn }">
        <v-btn v-bind="propsBtn" size="large" color="primary" variant="text" class="ml-5 mr-2">
          <v-icon size="large"> mdi-account-circle </v-icon>
          {{ fullname }}
        </v-btn>
      </template>

      <v-list nav dense>
        <v-list-item color="primary" @click="dialogProfile = true">
          <template #prepend><v-icon size="large">mdi-account-cog</v-icon></template>
          <v-list-item-title class="font-weight-bold text-subtitle-1">Profil</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary" @click="onClickLogout">
          <template #prepend><v-icon size="large">mdi-logout</v-icon></template>
          <v-list-item-title class="font-weight-bold text-subtitle-1">Déconnexion</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <user-profile v-model="dialogProfile" />
  </v-app-bar>
</template>
<script setup lang="ts">
import { useTheme } from 'vuetify';
import { useUserStore } from '~/stores/user';

// Declartion
const theme = useTheme();
// const miniVariant = ref(false);

const userStore = useUserStore();

const fullname = computed(() => userStore.getFullName);

// Props
const props = withDefaults(
  defineProps<{
    title: string;
    mini: boolean;
  }>(),
  {
    title: '',
    mini: false
  }
);

// Emit
const emit = defineEmits(['action:theme', 'action:mini']);

// Functions
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  emit('action:theme', theme.global.name.value);
};
const onClickMini = () => {
  // miniVariant.value = !miniVariant.value;
  emit('action:mini', !props.mini);
};

const dialogProfile = ref(false);

const onClickLogout = async () => {
  // Logout on server side
  await useFetchApi('logout', { method: 'POST' });
  // Refresh page
  await navigateTo('/', { external: true });
};
</script>

<style scoped>
.header-title {
  font-size: 24px;
  font-weight: 700;
}
</style>
