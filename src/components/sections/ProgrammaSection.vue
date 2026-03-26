<template>
  <section id="programma" class="section">
    <div class="container">
      <h2 class="section__title">Programma</h2>

      <div class="timeline">
        <div v-for="day in days" :key="day.date" class="timeline__item">
          <div class="timeline__marker">
            <span class="timeline__date">{{ day.date }}</span>
            <span class="timeline__label">{{ day.label }}</span>
          </div>
          <div class="timeline__content">
            <div v-for="(event, i) in day.events" :key="i" class="timeline__event">
              <span class="timeline__time">{{ event.time }}</span>
              <span class="timeline__desc">{{ event.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  days: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
/* Larghezza marker + posizione linea devono coincidere */
.timeline {
  --marker-w: 90px;
  --line-gap: 20px; /* spazio tra linea e card */
  position: relative;
}

/* Linea verticale: parte esatta dal bordo destro del marker */
.timeline::before {
  content: '';
  position: absolute;
  left: var(--marker-w);
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--color-primary);
}

.timeline__item {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: var(--space-lg);
  position: relative;
}

/* Pallino: centrato sulla linea */
.timeline__item::before {
  content: '';
  position: absolute;
  left: calc(var(--marker-w) - 6px);
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 2px solid var(--color-bg-surface);
  z-index: 1;
}

.timeline__marker {
  flex-shrink: 0;
  width: var(--marker-w);
  padding-right: var(--space-sm);
  text-align: right;
}

.timeline__date {
  display: block;
  font-weight: bold;
  font-size: 0.95rem;
  color: var(--color-primary);
  line-height: 1.3;
}

.timeline__label {
  display: block;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.timeline__content {
  flex: 1;
  margin-left: var(--line-gap);
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.timeline__event {
  display: flex;
  gap: var(--space-sm);
  padding-block: 4px;
}

.timeline__event + .timeline__event {
  border-top: 1px solid var(--color-border);
}

.timeline__time {
  font-weight: bold;
  color: var(--color-primary);
  min-width: 50px;
  flex-shrink: 0;
  font-size: 0.875rem;
}

.timeline__desc {
  font-size: 0.9rem;
  color: var(--color-text);
}

@media (max-width: 500px) {
  .timeline {
    --marker-w: 0px;
    padding-left: var(--space-md);
  }
  .timeline::before {
    left: 0;
  }
  .timeline__item {
    flex-direction: column;
    padding-left: var(--space-md);
  }
  .timeline__item::before {
    left: -5px;
  }
  .timeline__marker {
    width: auto;
    text-align: left;
    padding-right: 0;
  }
}
</style>
