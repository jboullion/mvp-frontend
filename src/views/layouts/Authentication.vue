<template>
  <div class="relative pt-6 min-h-full flex flex-col">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/marketing/Header.vue';
import Footer from '@/components/marketing/Footer.vue';
</script>

<style></style>
