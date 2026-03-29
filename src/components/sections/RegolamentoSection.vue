<template>
  <section id="regolamento" class="section">
    <div class="container regolamento__inner">
      <h2 class="section__title">{{ content.title }}</h2>
      <p class="regolamento__desc">{{ content.text }}</p>
      <BaseButton href="/regolamento.pdf" target="_blank" variant="primary">
        {{ content.cta }}
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'
import { regolamento as content } from '../../content.js'
</script>

<style scoped>
.regolamento__inner {
  text-align: center;
}

.regolamento__desc {
  margin-bottom: var(--space-md);
  color: var(--color-text-muted, #666);
}
</style>
