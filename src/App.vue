<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeaderTitle from "./components/HeaderTitle.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderTitle />

      <nav class="w-full text-center mt-4">
        <RouterLink to="/">목록</RouterLink>
        <RouterLink to="/about">통계</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav a.router-link-exact-active {
  @apply underline;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
