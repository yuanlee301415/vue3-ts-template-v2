<template>
  <section class="layout">
    <LayoutSideBar class="sideBar" />

    <main>
      <LayoutHeader />
      <LayoutContent />
    </main>
  </section>
</template>

<script lang="ts" setup>
import LayoutSideBar from './SideBar/index.vue'
import LayoutHeader from './Header/index.vue'
import LayoutContent from './Content/index.vue'

defineOptions({ name: 'LayoutComponent' })
</script>

<style scoped lang="less">
@sideWidth: 210px;

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .sideBar {
    position: fixed;
    width: @sideWidth;
    height: 100vh;
  }
  main {
    height: 100%;
    margin-left: @sideWidth;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .content {
      background-color: var(--color-background);
      padding: 10px;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
