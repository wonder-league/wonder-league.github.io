<template>
  <section id="iscrizione" class="section section--secondary">
    <div class="container text-center">
      <h2 class="section__title">Iscrizione</h2>
      <p class="iscrizione__text">
        Iscriva la tua squadra compilando il modulo online. Le iscrizioni sono aperte!
      </p>

      <ul class="iscrizione__requirements">
        <li>Da 5 a 10 giocatrici per rosa</li>
        <li>Almeno una giocatrice tesserata FIGC o CSI</li>
        <li>Allenatore/accompagnatore obbligatorio</li>
      </ul>

      <BaseButton :href="formUrl" target="_blank" variant="primary" class="mt-md">
        Compila il modulo di iscrizione
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'

defineProps({
  formUrl: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.iscrizione__text {
  font-size: 1.05rem;
  max-width: 560px;
  margin-inline: auto;
  margin-bottom: var(--space-md);
}

.iscrizione__requirements {
  display: inline-block;
  text-align: left;
  margin-bottom: var(--space-md);
  padding-left: var(--space-md);
}

.iscrizione__requirements li {
  margin-bottom: var(--space-xs);
}
</style>
