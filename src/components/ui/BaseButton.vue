<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href ? target : undefined"
    :rel="href && target === '_blank' ? 'noopener' : undefined"
    class="btn"
    :class="`btn--${variant}`"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  href: { type: String, default: null },
  variant: { type: String, default: 'primary' },
  target: { type: String, default: '_self' },
})
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  text-align: center;
}

.btn--primary {
  background: var(--gradient-primary);
  color: var(--color-text-on-primary);
  border-color: var(--color-primary);
}

.btn--primary:hover {
  background: transparent;
  color: var(--color-primary);
  text-decoration: none;
}

.btn--secondary {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn--secondary:hover {
  background: var(--gradient-primary);
  color: var(--color-text-on-primary);
  text-decoration: none;
}

.btn--outline-white {
  background-color: transparent;
  color: var(--color-text-on-primary);
  border-color: var(--color-text-on-primary);
}

.btn--outline-white:hover {
  background-color: var(--color-text-on-primary);
  color: var(--color-primary);
  text-decoration: none;
}
</style>
