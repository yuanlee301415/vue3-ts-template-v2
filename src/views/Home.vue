<script lang="ts" setup>
defineOptions({ name: 'HomeView' })
</script>

<template>
  <div class="home-view">
    <h1>Home</h1>
    <div class="card-container">
      <div class="card-icon">
        <img src="@/assets/logo.svg" alt="Logo" />
      </div>
      <div class="card-content">
        <div class="card-title">ChitChat</div>
        <p class="card-desc">You have a new message!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-view {
  h1 {
    margin-bottom: 1rem;
  }

  .card-container {
    padding: 1.5rem;
    max-width: 24rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    gap: 1rem;

    .card-icon {
      flex-shrink: 0;

      img {
        height: 3rem;
        width: 3rem;
      }
    }

    .card-content {
      .card-title {
        font-size: 1.25rem;
        font-weight: 500;
        color: #9ca3af;
      }

      .card-desc {
        color: #6b7280;
      }
    }
  }
}
</style>
