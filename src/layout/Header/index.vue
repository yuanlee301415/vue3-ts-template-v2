<template>
  <div class="header">
    <div class="headerLeft">
      <div class="breadcrumbs">
        <span v-if="route.meta">{{ route.meta?.title }}</span>
      </div>
    </div>

    <div class="headerRight">
      <span v-if="userInfo.userName">{{ userInfo.userName }}({{ userInfo.realName }})</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useUserStore } from '@/store/modules/user'

defineOptions({ name: 'LayoutHeader' })

const route = useRoute()
const userStore = useUserStore()
const userInfo = computed(() => userStore.getUserInfo)
</script>

<style scoped lang="less">
.header {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
}
</style>
