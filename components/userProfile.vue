<template>
  <v-dialog v-model="modelValue" max-width="400px">
    <v-card title="Profil utilisateur">
      <v-card-text class="pb-0">
        <v-row justify="center" class="pt-4">
          <v-col cols="12" md="8" class="pa-0">
            <v-text-field :model-value="sessionData?.username" label="Username" readonly></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" class="pt-4">
          <v-col cols="12" md="8" class="pa-0">
            <v-text-field :model-value="sessionData?.userFullName" label="Fullname" readonly></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" class="pt-4">
          <v-col cols="12" md="8" class="pa-0">
            <v-text-field :model-value="sessionData?.mail" label="Mail" readonly></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" class="pt-4">
          <v-col cols="12" md="8" class="pa-0">
            <v-text-field :model-value="sessionData?.role" label="Role" readonly></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" class="pt-4">
          <v-col cols="12" md="8" class="pa-0">
            <v-text-field :model-value="dateFormatted" label="Date de connexion" readonly></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="modelValue = false">
          <v-icon left> mdi-logout </v-icon>
          Fermer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true });

import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
// --- SessionData
const sessionData = computed(() => userStore.sessionData);
const date = computed(() => userStore.sessionData?.date);
const dateFormatted = computed(() => `${date.value?.substring(0, 10)} ${date.value?.substring(11, 19)}`);
</script>

<style scoped></style>
