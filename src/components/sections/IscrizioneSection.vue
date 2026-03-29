j<template>
  <section id="iscrizione" class="section section--secondary">
    <div class="container text-center">
      <h2 class="section__title">{{ content.title }}</h2>
      <p class="iscrizione__text">{{ content.text }}</p>

      <div class="iscrizione__body">
        <ul class="iscrizione__requirements">
          <li v-for="req in content.requirements" :key="req">{{ req }}</li>
        </ul>

        <BaseButton :href="content.formUrl" target="_blank" variant="primary">
          {{ content.cta }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'
import { iscrizione as content } from '../../content.js'
</script>

<style scoped>
.iscrizione__text {
  font-size: 1.05rem;
  max-width: 560px;
  margin-inline: auto;
  margin-bottom: var(--space-md);
}

.iscrizione__body {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.iscrizione__requirements {
  text-align: left;
  margin: 0;
  padding-left: var(--space-md);
}

.iscrizione__requirements li {
  margin-bottom: var(--space-xs);
}

@media (max-width: 600px) {
  .iscrizione__body {
    flex-direction: column;
    align-items: center;
  }
}
</style>
