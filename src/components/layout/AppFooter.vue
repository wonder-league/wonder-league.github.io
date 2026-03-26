<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">&copy; 2026 Wonder League. Tutti i diritti riservati.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
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

.footer__links {
  display: flex;
  gap: var(--space-md);
}

.footer__link {
  color: var(--color-text-on-primary);
  text-decoration: none;
  font-size: 0.875rem;
}

.footer__link:hover {
  text-decoration: underline;
}
</style>
