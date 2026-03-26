<template>
  <section id="regolamento" class="section">
    <div class="container regolamento__inner">
      <h2 class="section__title">Regolamento</h2>
      <p class="regolamento__desc">Scarica il regolamento ufficiale del torneo in formato PDF.</p>
      <BaseButton href="/regolamento.pdf" target="_blank" variant="primary">
        Scarica il regolamento
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'
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
