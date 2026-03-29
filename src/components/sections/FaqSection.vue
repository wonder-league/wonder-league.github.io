<template>
  <section id="faq" class="section">
    <div class="container">
      <h2 class="section__title">{{ content.title }}</h2>

      <div class="faq-list">
        <details v-for="(item, i) in faqs" :key="i" class="faq-item">
          <summary class="faq-item__question">{{ item.question }}</summary>
          <p class="faq-item__answer">{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import { faq as content } from '../../content.js'

defineProps({
  faqs: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.faq-list {
  max-width: 720px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.faq-item {
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.faq-item[open] {
  border-color: var(--color-primary);
}

.faq-item__question {
  padding: var(--space-sm) var(--space-md);
  cursor: pointer;
  font-weight: bold;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.faq-item__question::-webkit-details-marker {
  display: none;
}

.faq-item__question::after {
  content: '+';
  font-size: 1.25rem;
  color: var(--color-primary);
  flex-shrink: 0;
  transition: transform 0.2s;
}

.faq-item[open] .faq-item__question::after {
  transform: rotate(45deg);
}

.faq-item__answer {
  margin: 0;
  padding: 0 var(--space-md) var(--space-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>
