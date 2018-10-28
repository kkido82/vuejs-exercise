<template>
  <v-app light>
    <no-ssr>
      <v-toolbar fixed app>
        <v-toolbar-side-icon></v-toolbar-side-icon>
      </v-toolbar>
      <v-content>
        <v-container id="maint" class="maint">
          <nuxt />
        </v-container>
      </v-content>
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </no-ssr>
  </v-app>
</template>
