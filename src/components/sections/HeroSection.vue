<template>
  <section class="hero">
    <div class="hero__content">
      <img src="/logo/logo.png" alt="Wonder League" class="hero__logo" />
      <p class="hero__subtitle">Torneo di calcio a 5 femminile &middot; Senigallia &middot; 21&ndash;25 Luglio 2026</p>
      <div class="hero__ctas">
        <BaseButton variant="primary" @click="scrollTo('iscrizione')">Iscriviti</BaseButton>
        <BaseButton variant="secondary" @click="scrollTo('descrizione')">Scopri di pi&ugrave;</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
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
  background-color: #e8e8e8;
  color: #2a2a2a;
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
