<template>
  <div class="content">
    <RouterView v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'LayoutContent' })
</script>
