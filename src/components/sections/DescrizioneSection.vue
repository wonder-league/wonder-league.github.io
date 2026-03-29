<template>
  <section id="descrizione" class="section section--alt">
    <div class="container">
      <h2 class="section__title">{{ content.title }}</h2>
      <p class="descrizione__text">{{ content.text }}</p>

      <div class="grid-3 mt-lg">
        <BaseCard v-for="feature in content.features" :key="feature.title" elevated>
          <div class="feature-card">
            <span class="feature-card__icon">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.text }}</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseCard from '../ui/BaseCard.vue'
import { descrizione as content } from '../../content.js'
</script>

<style scoped>
.descrizione__text {
  font-size: 1.05rem;
  max-width: 680px;
  margin-inline: auto;
  text-align: center;
  color: var(--color-text-muted);
}

.feature-card {
  text-align: center;
}

.feature-card__icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: var(--space-sm);
}

.feature-card h3 {
  margin-bottom: var(--space-xs);
}

.feature-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}
</style>
