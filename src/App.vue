<template>
  <v-app id="inspire">
    <v-app-bar app>
      <router-link to="/about">demo</router-link>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>
