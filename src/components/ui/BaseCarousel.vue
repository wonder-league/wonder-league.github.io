<template>
  <div
    class="carousel"
    @pointerdown="onPointerDown"
    @pointerup="onPointerUp"
  >
    <div class="carousel__track" :style="trackStyle">
      <div
        v-for="(image, i) in images"
        :key="i"
        class="carousel__slide"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>

    <button class="carousel__btn carousel__btn--prev" @click="prev" aria-label="Precedente">&#8249;</button>
    <button class="carousel__btn carousel__btn--next" @click="next" aria-label="Successivo">&#8250;</button>

    <div class="carousel__dots">
      <button
        v-for="(_, i) in images"
        :key="i"
        class="carousel__dot"
        :class="{ 'is-active': i === currentIndex }"
        @click="goTo(i)"
        :aria-label="`Vai alla foto ${i + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  autoplay: { type: Boolean, default: false },
  interval: { type: Number, default: 4000 },
})

const emit = defineEmits(['change'])

const SWIPE_THRESHOLD_PX = 50

const currentIndex = ref(0)
let timer = null
let pointerStartX = 0

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}))

function goTo(index) {
  currentIndex.value = (index + props.images.length) % props.images.length
  emit('change', { index: currentIndex.value })
}

function next() { goTo(currentIndex.value + 1) }
function prev() { goTo(currentIndex.value - 1) }

function startAutoplay() {
  if (!props.autoplay) return
  timer = setInterval(next, props.interval)
}

function stopAutoplay() {
  clearInterval(timer)
}

function onPointerDown(e) {
  pointerStartX = e.clientX
}

function onPointerUp(e) {
  const delta = e.clientX - pointerStartX
  if (Math.abs(delta) > SWIPE_THRESHOLD_PX) {
    delta < 0 ? next() : prev()
  }
}

onMounted(startAutoplay)
onUnmounted(stopAutoplay)

defineExpose({ goTo, next, prev })
</script>

<style scoped>
.carousel {
  --btn-overlay: rgba(0, 0, 0, 0.4);
  --btn-overlay-hover: rgba(0, 0, 0, 0.65);
  --dot-size: 10px;
  --dots-gap: 6px;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  touch-action: pan-y;
  user-select: none;
}

.carousel__track {
  display: flex;
  transition: transform 0.4s ease;
}

.carousel__slide {
  flex: 0 0 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.carousel__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--btn-overlay);
  color: var(--color-text-on-primary);
  border: none;
  font-size: 2rem;
  line-height: 1;
  padding: 0.25rem 0.6rem;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: background-color 0.15s;
  z-index: 1;
}

.carousel__btn:hover {
  background-color: var(--btn-overlay-hover);
}

.carousel__btn--prev { left: var(--space-xs); }
.carousel__btn--next { right: var(--space-xs); }

.carousel__dots {
  position: absolute;
  bottom: var(--space-sm);
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: var(--dots-gap);
}

.carousel__dot {
  width: var(--dot-size);
  height: var(--dot-size);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.15s;
}

.carousel__dot.is-active {
  background-color: var(--color-text-on-primary);
}
</style>
