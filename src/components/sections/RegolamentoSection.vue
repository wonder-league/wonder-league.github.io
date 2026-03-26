<template>
  <section id="regolamento" class="section">
    <div class="container">
      <h2 class="section__title">Regolamento</h2>

      <div class="rules-list">
        <div v-for="rule in rules" :key="rule.id" class="rule">
          <span class="rule__badge">{{ rule.id }}</span>
          <p class="rule__text">{{ rule.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  rules: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.rules-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  max-width: 720px;
  margin-inline: auto;
}

.rule {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
}

.rule__badge {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: var(--color-primary);
  color: var(--color-text-on-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.875rem;
}

.rule__text {
  margin: 0;
  line-height: 1.6;
  align-self: center;
}
</style>
