<template>
  <header ref="headerRef" class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__inner">
      <a href="#" class="header__logo" @click.prevent="onLogoClick">
        <img src="/logo/logo-white.png" alt="Wonder League" />
      </a>

      <button
        class="header__hamburger"
        :class="{ 'is-open': isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
        :aria-label="content.hamburgerLabel"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header__nav" :class="{ 'is-open': isMenuOpen }">
        <a
          v-for="link in content.nav"
          :key="link.href"
          :href="link.href"
          class="header__nav-link"
          @click.prevent="onNavLinkClick(link.href)"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { header as content } from '../../content.js'
import { scrollToTop, scrollToSection } from '../../utils/scroll.js'

const SCROLL_THRESHOLD_PX = 20

const headerRef = ref(null)
const isScrolled = ref(false)
const isMenuOpen = ref(false)

function onLogoClick() {
  scrollToTop()
  isMenuOpen.value = false
}

function onNavLinkClick(href) {
  scrollToSection(href.replace('#', ''), headerRef.value?.offsetHeight ?? 0)
  isMenuOpen.value = false
}

function onScroll() {
  isScrolled.value = window.scrollY > SCROLL_THRESHOLD_PX
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
  background: var(--gradient-bg-alt);
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
  background: var(--gradient-primary);
  color: var(--color-text-on-primary);
  text-decoration: none;
}

.header__hamburger {
  --bar-width: 24px;
  --bar-height: 2px;
  --bar-gap: 5px;
  display: none;
  flex-direction: column;
  gap: var(--bar-gap);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.header__hamburger span {
  display: block;
  width: var(--bar-width);
  height: var(--bar-height);
  background-color: var(--color-text);
  border-radius: 2px;
  transition: transform 0.2s, opacity 0.2s;
}

.header__hamburger.is-open span:nth-child(1) {
  transform: translateY(calc(var(--bar-gap) + var(--bar-height))) rotate(45deg);
}
.header__hamburger.is-open span:nth-child(2) {
  opacity: 0;
}
.header__hamburger.is-open span:nth-child(3) {
  transform: translateY(calc(-1 * (var(--bar-gap) + var(--bar-height)))) rotate(-45deg);
}

@media (max-width: 600px) {
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
    background: var(--gradient-bg-alt);
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
