<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">{{ content.copyright }}</p>
    </div>
  </footer>
</template>

<script setup>
import { footer as content } from '../../content.js'
</script>

<style scoped>
.footer {
  background: var(--gradient-primary);
  color: var(--color-text-on-primary);
  padding-block: var(--space-xs);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-sm);
}

.footer__copy {
  margin: 0;
  font-size: 0.875rem;
}

</style>
