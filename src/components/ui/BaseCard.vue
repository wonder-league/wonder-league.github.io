<template>
  <div class="card" :class="{ 'card--elevated': elevated }">
    <div v-if="$slots.header || title" class="card__header">
      <slot name="header">
        <h3 class="card__title">{{ title }}</h3>
      </slot>
    </div>
    <div class="card__body">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: null },
  elevated: { type: Boolean, default: false },
})
</script>

<style scoped>
.card {
  background: var(--gradient-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.card--elevated {
  box-shadow: var(--shadow-md);
}

.card__header {
  padding: var(--space-sm) var(--space-md);
  background: var(--gradient-bg-alt);
  border-bottom: 1px solid var(--color-border);
}

.card__title {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text);
}

.card__body {
  padding: var(--space-md);
}
</style>
