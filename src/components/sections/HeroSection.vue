<template>
  <section class="hero">
    <div class="hero__content">
      <img src="/logo/logo.png" alt="Wonder League" class="hero__logo" />
      <p class="hero__subtitle">{{ content.subtitle }}</p>
      <div class="hero__ctas">
        <BaseButton variant="primary" @click="scrollToSection('iscrizione')">{{ content.ctaIscrizione }}</BaseButton>
        <BaseButton variant="secondary" @click="scrollToSection('descrizione')">{{ content.ctaScopri }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'
import { hero as content } from '../../content.js'
import { scrollToSection } from '../../utils/scroll.js'
</script>

<style scoped>
.hero {
  min-height: 100svh;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--gradient-hero);
  color: var(--color-text-on-hero);
  padding-top: var(--header-height);
}

.hero__content {
  position: relative;
  z-index: 1;
  padding: var(--space-lg) var(--space-sm);
  max-width: 860px;
}

.hero__logo {
  width: clamp(220px, 35vw, 540px);
  height: auto;
  margin-inline: auto;
  margin-bottom: var(--space-lg);
}

.hero__subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin-bottom: var(--space-lg);
}

.hero__ctas {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.hero__ctas :deep(.btn) {
  padding: 0.85rem 2rem;
  font-size: 1.1rem;
}
</style>
