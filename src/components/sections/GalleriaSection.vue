<template>
  <section id="galleria" class="section section--alt">
    <div class="container">
      <h2 class="section__title">Galleria</h2>
      <BaseCarousel :images="images" :autoplay="true" :interval="5000" />
    </div>
  </section>
</template>

<script setup>
import BaseCarousel from '../ui/BaseCarousel.vue'

const images = [
  { src: '/imgs/P1278701.jpg', alt: 'Wonder League - Foto 1' },
  { src: '/imgs/P1278748.jpg', alt: 'Wonder League - Foto 2' },
  { src: '/imgs/P1289145.jpg', alt: 'Wonder League - Foto 3' },
  { src: '/imgs/P1289156.jpg', alt: 'Wonder League - Foto 4' },
  { src: '/imgs/P1289475.jpg', alt: 'Wonder League - Foto 5' },
  { src: '/imgs/P1289489.jpg', alt: 'Wonder League - Foto 6' },
  { src: '/imgs/P1289544.jpg', alt: 'Wonder League - Foto 7' },
  { src: '/imgs/0dd816a3-8ee8-446d-a27c-dafb35e1fb25.JPG', alt: 'Wonder League - Foto 8' },
  { src: '/imgs/0ec48ea9-c5f7-4051-9c20-d7e0412acf40.JPG', alt: 'Wonder League - Foto 9' },
  { src: '/imgs/3e9fb4cb-35ea-4bfc-a0e9-9271c1f271f7.JPG', alt: 'Wonder League - Foto 10' },
  { src: '/imgs/9f5aef8c-614d-4f2f-8ef3-ef3c4e336763.JPG', alt: 'Wonder League - Foto 11' },
]
</script>
