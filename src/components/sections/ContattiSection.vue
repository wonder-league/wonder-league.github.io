<template>
  <section id="contatti" class="section section--alt">
    <div class="container">
      <h2 class="section__title">Contatti</h2>

      <div class="grid-3">
        <BaseCard elevated>
          <div class="contact-card">
            <span class="contact-card__icon">&#128222;</span>
            <h3>Telefono</h3>
            <a href="tel:+393206304183">+39 320 630 4183</a>
          </div>
        </BaseCard>
        <BaseCard elevated>
          <div class="contact-card">
            <span class="contact-card__icon">&#9993;</span>
            <h3>Email</h3>
            <a href="mailto:wonderleague2024@gmail.com">wonderleague2024@gmail.com</a>
          </div>
        </BaseCard>
        <BaseCard elevated>
          <div class="contact-card">
            <span class="contact-card__icon">&#128247;</span>
            <h3>Instagram</h3>
            <a href="https://instagram.com/_wonderleague" target="_blank" rel="noopener">@_wonderleague</a>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseCard from '../ui/BaseCard.vue'
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
