<template>
  <section id="contatti" class="section section--alt">
    <div class="container">
      <h2 class="section__title">{{ content.title }}</h2>

      <div class="grid-3">
        <BaseCard v-for="card in content.cards" :key="card.title" elevated>
          <div class="contact-card">
            <span class="contact-card__icon">{{ card.icon }}</span>
            <h3>{{ card.title }}</h3>
            <a :href="card.href" :target="card.target" :rel="card.rel">{{ card.value }}</a>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseCard from '../ui/BaseCard.vue'
import { contatti as content } from '../../content.js'
</script>

<style scoped>
.contact-card {
  text-align: center;
}

.contact-card__icon {
  font-size: 2rem;
  display: block;
  margin-bottom: var(--space-sm);
}

.contact-card h3 {
  margin-bottom: var(--space-xs);
  font-size: 1rem;
}

.contact-card a {
  font-size: 0.9rem;
  word-break: break-all;
}
</style>
