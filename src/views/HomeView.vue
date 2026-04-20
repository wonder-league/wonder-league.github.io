<template>
  <main>
    <HeroSection />
    <DescrizioneSection />
    <ProgrammaSection :days="programmaContent.days" />
    <RegolamentoSection />
    <IscrizioneSection />
    <GalleriaSection />
    <FaqSection :faqs="faqContent.items" />
    <ContattiSection />
  </main>
</template>

<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import DescrizioneSection from '../components/sections/DescrizioneSection.vue'
// import ProgrammaSection from '../components/sections/ProgrammaSection.vue'
import RegolamentoSection from '../components/sections/RegolamentoSection.vue'
import IscrizioneSection from '../components/sections/IscrizioneSection.vue'
import GalleriaSection from '../components/sections/GalleriaSection.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import ContattiSection from '../components/sections/ContattiSection.vue'
import { programma as programmaContent, faq as faqContent } from '../content.js'
</script>

<style scoped>
main {
  padding-top: var(--header-height);
}

/* Hero section has its own padding-top, reset it here */
main > :first-child {
  padding-top: 0;
  margin-top: calc(-1 * var(--header-height));
}
</style>
