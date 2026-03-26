<template>
  <section id="descrizione" class="section section--alt">
    <div class="container">
      <h2 class="section__title">Il Torneo</h2>
      <p class="descrizione__text">
        Wonder League è un torneo di calcio a 5 femminile che si svolge a Senigallia,
        presso il Seminario, dal 21 al 25 Luglio 2026. L'evento nasce con l'obiettivo di
        riunire squadre da tutta Italia in uno spirito di divertimento, amicizia e fair play.
        Cinque giorni di partite, emozioni e tanto calcio giocato da donne appassionate.
      </p>

      <div class="grid-3 mt-lg">
        <BaseCard elevated>
          <div class="feature-card">
            <span class="feature-card__icon">&#9917;</span>
            <h3>Squadre</h3>
            <p>Fino a 6 squadre partecipanti suddivise in gironi</p>
          </div>
        </BaseCard>
        <BaseCard elevated>
          <div class="feature-card">
            <span class="feature-card__icon">&#128197;</span>
            <h3>5 Giorni</h3>
            <p>T.B.D. a Senigallia (AN)</p>
          </div>
        </BaseCard>
        <BaseCard elevated>
          <div class="feature-card">
            <span class="feature-card__icon">&#127942;</span>
            <h3>Fair Play</h3>
            <p>Spirito sportivo e amicizia al centro di ogni partita</p>
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
.descrizione__text {
  font-size: 1.05rem;
  max-width: 680px;
  margin-inline: auto;
  text-align: center;
  color: var(--color-text-muted);
}

.feature-card {
  text-align: center;
}

.feature-card__icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: var(--space-sm);
}

.feature-card h3 {
  margin-bottom: var(--space-xs);
}

.feature-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}
</style>
