j<template>
  <section id="iscrizione" class="section section--secondary">
    <div class="container text-center">
      <h2 class="section__title">Iscrizione</h2>
      <p class="iscrizione__text">
        Iscriva la tua squadra compilando il modulo online. Le iscrizioni sono aperte!
      </p>

      <div class="iscrizione__body">
        <ul class="iscrizione__requirements">
          <li>Da 5 a 10 giocatrici per rosa</li>
          <li>Almeno una giocatrice tesserata FIGC o CSI</li>
          <li>Allenatore/accompagnatore obbligatorio</li>
        </ul>

        <BaseButton :href="formUrl" target="_blank" variant="primary">
          Compila il modulo di iscrizione
        </BaseButton>
      </div>
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
