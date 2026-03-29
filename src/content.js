// ============================================================
// src/content.js
// Tutti i testi del sito Wonder League — modifica qui!
// ============================================================

// ─── Header ──────────────────────────────────────────────────
export const header = {
  hamburgerLabel: 'Apri menu',
  nav: [
    { href: '#descrizione', label: 'Descrizione' },
    { href: '#programma',   label: 'Programma' },
    { href: '#gironi',      label: 'Gironi' },
    { href: '#regolamento', label: 'Regolamento' },
    { href: '#iscrizione',  label: 'Iscrizione' },
    { href: '#galleria',    label: 'Galleria' },
    { href: '#faq',         label: 'FAQ' },
    { href: '#contatti',    label: 'Contatti' },
  ],
}

// ─── Footer ──────────────────────────────────────────────────
export const footer = {
  copyright: '© 2026 Wonder League. Tutti i diritti riservati.',
}

// ─── Hero ────────────────────────────────────────────────────
export const hero = {
  subtitle: 'Torneo di calcio a 5 femminile · Senigallia · TBD',
  ctaIscrizione: 'Iscriviti',
  ctaScopri: 'Scopri di più',
}

// ─── Descrizione ─────────────────────────────────────────────
export const descrizione = {
  title: 'Il Torneo',
  text: "Wonder League è un torneo di calcio a 5 femminile che si svolge a Senigallia, presso il Seminario. L'evento nasce con l'obiettivo di riunire squadre da tutta Italia in uno spirito di divertimento, amicizia e fair play. Cinque giorni di partite, emozioni e tanto calcio giocato da donne appassionate.",
  features: [
    { icon: '⚽', title: 'Squadre',   text: 'Fino a 6 squadre partecipanti suddivise in gironi' },
    { icon: '📅', title: '5 Giorni',  text: 'T.B.D. a Senigallia (AN)' },
    { icon: '🏆', title: 'Fair Play', text: 'Spirito sportivo e amicizia al centro di ogni partita' },
  ],
}

// ─── Programma ───────────────────────────────────────────────
export const programma = {
  title: 'Programma',
  days: [
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
  ],
}

// ─── Regolamento ─────────────────────────────────────────────
export const regolamento = {
  title: 'Regolamento',
  text: 'Scarica il regolamento ufficiale del torneo in formato PDF.',
  cta: 'Scarica il regolamento',
}

// ─── Iscrizione ──────────────────────────────────────────────
export const iscrizione = {
  title: 'Iscrizione',
  text: 'Iscrivi la tua squadra compilando il modulo online. Le iscrizioni sono aperte!',
  requirements: [
    'Da 5 a 10 giocatrici per rosa',
    'Almeno una giocatrice tesserata FIGC o CSI',
    'Allenatore/accompagnatore obbligatorio',
  ],
  cta: 'Compila il modulo di iscrizione',
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSepR-LRKB9oElUL1-oZiRKXaqZMEpPTRRearLKY9CtfOttjFw/viewform?usp=sf_link',
}

// ─── Galleria ────────────────────────────────────────────────
export const galleria = {
  title: 'Galleria',
  images: [
    { src: '/imgs/P1278701.jpg',                                    alt: 'Wonder League - Foto 1' },
    { src: '/imgs/P1278748.jpg',                                    alt: 'Wonder League - Foto 2' },
    { src: '/imgs/P1289145.jpg',                                    alt: 'Wonder League - Foto 3' },
    { src: '/imgs/P1289156.jpg',                                    alt: 'Wonder League - Foto 4' },
    { src: '/imgs/P1289475.jpg',                                    alt: 'Wonder League - Foto 5' },
    { src: '/imgs/P1289489.jpg',                                    alt: 'Wonder League - Foto 6' },
    { src: '/imgs/P1289544.jpg',                                    alt: 'Wonder League - Foto 7' },
    { src: '/imgs/0dd816a3-8ee8-446d-a27c-dafb35e1fb25.JPG',       alt: 'Wonder League - Foto 8' },
    { src: '/imgs/0ec48ea9-c5f7-4051-9c20-d7e0412acf40.JPG',       alt: 'Wonder League - Foto 9' },
    { src: '/imgs/3e9fb4cb-35ea-4bfc-a0e9-9271c1f271f7.JPG',       alt: 'Wonder League - Foto 10' },
    { src: '/imgs/9f5aef8c-614d-4f2f-8ef3-ef3c4e336763.JPG',       alt: 'Wonder League - Foto 11' },
  ],
}

// ─── FAQ ─────────────────────────────────────────────────────
export const faq = {
  title: 'Domande Frequenti',
  items: [
    {
      question: "Come si effettua l'iscrizione?",
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
      question: 'Cosa succede in caso di pioggia?',
      answer: "In caso di condizioni meteorologiche avverse, il programma potrà subire variazioni. Sarà cura dell'organizzazione comunicare eventuali modifiche in tempo utile a tutte le squadre iscritte.",
    },
  ],
}

// ─── Contatti ────────────────────────────────────────────────
export const contatti = {
  title: 'Contatti',
  cards: [
    { icon: '📞', title: 'Telefono',  value: '+39 320 630 4183',            href: 'tel:+393206304183' },
    { icon: '✉',  title: 'Email',     value: 'wonderleague2024@gmail.com',  href: 'mailto:wonderleague2024@gmail.com' },
    { icon: '📷', title: 'Instagram', value: '@_wonderleague',              href: 'https://instagram.com/_wonderleague', target: '_blank', rel: 'noopener' },
  ],
}

// ─── Gironi ──────────────────────────────────────────────────
export const groups = [
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
