<template>
  <section class="hero">
    <div class="hero__content">
      <img src="/logo/WL%20Wonder%20League.png" alt="Wonder League" class="hero__logo" />
      <h1 class="hero__title">Wonder League 2026</h1>
      <p class="hero__subtitle">Torneo di calcio a 5 femminile &middot; Senigallia &middot; 21&ndash;25 Luglio 2026</p>
      <div class="hero__ctas">
        <BaseButton href="#iscrizione" variant="primary">Iscriviti</BaseButton>
        <BaseButton href="#descrizione" variant="outline-white">Scopri di pi&ugrave;</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'
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
  background-image: url('/logo/WL%20Wonder%20League.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  padding-top: var(--header-height);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.hero__content {
  position: relative;
  z-index: 1;
  padding: var(--space-lg) var(--space-sm);
  max-width: 700px;
}

.hero__logo {
  width: 120px;
  height: auto;
  margin-inline: auto;
  margin-bottom: var(--space-md);

}

.hero__title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin-bottom: var(--space-sm);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.hero__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  margin-bottom: var(--space-lg);
  opacity: 0.9;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.hero__ctas {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
}
</style>
