<template>
  <v-app id="inspire">
    <layout-notification />
    <layout-drawer :mini="mini" @action:mini="onClickMini" />
    <layout-toolbar :title="title" :mini="mini" @action:theme="onClickTheme" @action:mini="onClickMini" />
    <v-main>
      <v-container fluid class="page-wrapper">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const mini = ref(false);
const title = ref('<Title>');
const route = useRoute();

watch(
  () => route.path,
  (newParam) => {
    if (newParam === '/') {
      mini.value = true;
    } else {
      mini.value = false;
    }
  },
  { immediate: true }
);

type TTheme = 'dark' | 'light';

const onClickTheme = (theme: TTheme) => {
  console.log('theme', theme);
};

const onClickMini = (data: boolean) => {
  mini.value = data;
};
</script>

<style scoped></style>
