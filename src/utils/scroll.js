export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function scrollToSection(id, offsetPx = 0) {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - offsetPx
  window.scrollTo({ top, behavior: 'smooth' })
}
