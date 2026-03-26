<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__inner">
      <a href="#" class="header__logo">
        <img src="/logo/WL%20Wonder%20League.png" alt="Wonder League" />
      </a>

      <button
        class="header__hamburger"
        :class="{ 'is-open': isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Apri menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header__nav" :class="{ 'is-open': isMenuOpen }">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="header__nav-link" @click="isMenuOpen = false">
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { href: '#descrizione', label: 'Descrizione' },
  { href: '#programma', label: 'Programma' },
  { href: '#gironi', label: 'Gironi' },
  { href: '#regolamento', label: 'Regolamento' },
  { href: '#iscrizione', label: 'Iscrizione' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contatti', label: 'Contatti' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  transition: background-color 0.2s, box-shadow 0.2s;
}

.header--scrolled {
  background-color: var(--color-accent);
  box-shadow: var(--shadow-md);
}

.header__inner {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-sm);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  text-decoration: none;
  color: var(--color-text);
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.header__logo img {
  height: 40px;
  width: auto;
}

.header__nav {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
  justify-content: flex-end;
}

.header__nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.85rem;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  transition: background-color 0.15s;
}

.header__nav-link:hover {
  background-color: var(--color-primary);
  color: var(--color-text-on-primary);
  text-decoration: none;
}

.header__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.header__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 2px;
  transition: transform 0.2s, opacity 0.2s;
}

.header__hamburger.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.header__hamburger.is-open span:nth-child(2) {
  opacity: 0;
}
.header__hamburger.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 700px) {
  .header__hamburger {
    display: flex;
  }

  .header__nav {
    display: none;
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--color-accent);
    padding: var(--space-sm);
    box-shadow: var(--shadow-md);
    gap: 0;
  }

  .header__nav.is-open {
    display: flex;
  }

  .header__nav-link {
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
  }
}
</style>
