<template>
  <section id="galleria" class="section section--alt">
    <div class="container">
      <h2 class="section__title">{{ content.title }}</h2>
      <BaseCarousel :images="content.images" :autoplay="true" :interval="5000" />
    </div>
  </section>
</template>

<script setup>
import BaseCarousel from '../ui/BaseCarousel.vue'
import { galleria as content } from '../../content.js'
</script>
