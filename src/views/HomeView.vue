<template>
  <main>
    <HeroSection />
    <DescrizioneSection />
    <ProgrammaSection :days="programma" />
    <GironiSection :groups="groups" />
    <RegolamentoSection :rules="rules" />
    <IscrizioneSection :form-url="FORM_URL" />
    <GalleriaSection />
    <FaqSection :faqs="faqs" />
    <ContattiSection />
  </main>
</template>

<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import DescrizioneSection from '../components/sections/DescrizioneSection.vue'
import ProgrammaSection from '../components/sections/ProgrammaSection.vue'
import GironiSection from '../components/sections/GironiSection.vue'
import RegolamentoSection from '../components/sections/RegolamentoSection.vue'
import IscrizioneSection from '../components/sections/IscrizioneSection.vue'
import GalleriaSection from '../components/sections/GalleriaSection.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import ContattiSection from '../components/sections/ContattiSection.vue'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSepR-LRKB9oElUL1-oZiRKXaqZMEpPTRRearLKY9CtfOttjFw/viewform?usp=sf_link'

const rules = [
  { id: 1, text: 'Il torneo è riservato a squadre femminili. Ogni squadra deve essere composta da un minimo di 5 e un massimo di 10 giocatrici.' },
  { id: 2, text: 'Ogni squadra deve avere almeno una giocatrice tesserata FIGC o CSI per la stagione in corso.' },
  { id: 3, text: 'È obbligatoria la presenza di un allenatore/accompagnatore maggiorenne per tutta la durata del torneo.' },
  { id: 4, text: 'Le partite si disputano su campo in erba sintetica con porte regolamentari da calcio a 5.' },
  { id: 5, text: 'La durata di ogni partita è di 2 tempi da 20 minuti ciascuno con 5 minuti di intervallo.' },
  { id: 6, text: 'Ogni squadra può effettuare sostituzioni illimitate, ma solo durante le interruzioni di gioco.' },
  { id: 7, text: 'In caso di parità nella fase a gironi si assegnano: 3 punti alla vittoria, 1 punto al pareggio, 0 punti alla sconfitta.' },
  { id: 8, text: 'In caso di parità di punti nel girone, si tiene conto di: differenza reti, gol fatti, scontro diretto.' },
  { id: 9, text: 'Nella fase a eliminazione diretta, in caso di parità al termine dei tempi regolamentari, si procederà ai calci di rigore.' },
  { id: 10, text: 'Comportamenti antisportivi, insulti o violenze comporteranno l\'immediata squalifica della giocatrice e potenzialmente dell\'intera squadra.' },
]

const faqs = [
  {
    question: 'Come si effettua l\'iscrizione?',
    answer: 'L\'iscrizione avviene compilando il modulo Google disponibile nella sezione "Iscrizione" di questo sito. Una volta inviato il modulo, riceverete una email di conferma con tutte le informazioni.',
  },
  {
    question: 'Quante giocatrici può avere una squadra?',
    answer: 'Ogni rosa deve avere un minimo di 5 giocatrici (il numero minimo per scendere in campo) e un massimo di 10.',
  },
  {
    question: 'Dove si svolge il torneo?',
    answer: 'Il torneo si svolge presso il Seminario di Senigallia, in provincia di Ancona (AN), dal 21 al 25 Luglio 2026.',
  },
  {
    question: 'È previsto un alloggio per le squadre?',
    answer: 'Per informazioni sull\'alloggio e sui servizi aggiuntivi, si prega di contattarci via email o telefono. Senigallia offre molte strutture ricettive nelle vicinanze.',
  },
  {
    question: 'Cosa succede in caso di pioggia?',
    answer: 'In caso di condizioni meteorologiche avverse, il programma potrà subire variazioni. Sarà cura dell\'organizzazione comunicare eventuali modifiche in tempo utile a tutte le squadre iscritte.',
  },
]

const programma = [
  {
    date: '21 Lug',
    label: 'Lunedì',
    events: [
      { time: 'TBD', description: 'Arrivo squadre e registrazione' },
      { time: 'TBD', description: 'Cena di benvenuto' },
    ],
  },
  {
    date: '22 Lug',
    label: 'Martedì',
    events: [
      { time: 'TBD', description: 'Fase a gironi – Giornata 1' },
    ],
  },
  {
    date: '23 Lug',
    label: 'Mercoledì',
    events: [
      { time: 'TBD', description: 'Fase a gironi – Giornata 2' },
    ],
  },
  {
    date: '24 Lug',
    label: 'Giovedì',
    events: [
      { time: 'TBD', description: 'Quarti e Semifinali' },
    ],
  },
  {
    date: '25 Lug',
    label: 'Venerdì',
    events: [
      { time: 'TBD', description: 'Finale 3° posto' },
      { time: 'TBD', description: 'Finale e premiazione' },
    ],
  },
]

const groups = [
  {
    name: 'Girone A',
    teams: [
      { name: 'Squadra 1', g: 0, v: 0, p: 0, s: 0, gf: 0, ga: 0, pts: 0 },
      { name: 'Squadra 2', g: 0, v: 0, p: 0, s: 0, gf: 0, ga: 0, pts: 0 },
      { name: 'Squadra 3', g: 0, v: 0, p: 0, s: 0, gf: 0, ga: 0, pts: 0 },
    ],
  },
  {
    name: 'Girone B',
    teams: [
      { name: 'Squadra 4', g: 0, v: 0, p: 0, s: 0, gf: 0, ga: 0, pts: 0 },
      { name: 'Squadra 5', g: 0, v: 0, p: 0, s: 0, gf: 0, ga: 0, pts: 0 },
      { name: 'Squadra 6', g: 0, v: 0, p: 0, s: 0, gf: 0, ga: 0, pts: 0 },
    ],
  },
]
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
