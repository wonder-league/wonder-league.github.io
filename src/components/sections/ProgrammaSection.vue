<template>
  <section id="programma" class="section">
    <div class="container">
      <h2 class="section__title">Programma</h2>

      <div class="timeline">
        <div v-for="day in days" :key="day.date" class="timeline__item">
          <div class="timeline__content">
            <div class="timeline__marker">
              <span class="timeline__date">{{ day.date }}</span>
              <span class="timeline__label">{{ day.label }}</span>
            </div>
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
.timeline {
  --line-x: 10px;
  position: relative;
  padding-left: 32px;
}

/* Linea verticale */
.timeline::before {
  content: '';
  position: absolute;
  left: var(--line-x);
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--color-primary);
}

.timeline__item {
  margin-bottom: var(--space-lg);
  position: relative;
}

/* Pallino sulla linea */
.timeline__item::before {
  content: '';
  position: absolute;
  left: calc(-22px + var(--line-x) - 6px);
  top: 14px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 2px solid var(--color-bg-surface);
  z-index: 1;
}

.timeline__content {
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.timeline__marker {
  display: flex;
  align-items: baseline;
  gap: var(--space-xs);
  padding-bottom: var(--space-xs);
  margin-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-border);
}

.timeline__date {
  font-weight: bold;
  font-size: 0.95rem;
  color: var(--color-primary);
  line-height: 1.3;
}

.timeline__label {
  font-size: 0.8rem;
  color: var(--color-text-muted);
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
</style>
