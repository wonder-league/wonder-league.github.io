<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">&copy; 2026 Wonder League. Tutti i diritti riservati.</p>
      <div class="footer__links">
        <a href="https://instagram.com/_wonderleague" target="_blank" rel="noopener" class="footer__link">
          Instagram
        </a>
        <a href="mailto:wonderleague2024@gmail.com" class="footer__link">
          wonderleague2024@gmail.com
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: var(--color-text-on-primary);
  padding-block: var(--space-md);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
