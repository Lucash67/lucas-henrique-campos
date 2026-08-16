const DESKTOP = 980
let observer: IntersectionObserver | null = null
let index = 0

function reduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function desktop() {
  return window.matchMedia(`(min-width: ${DESKTOP}px)`).matches
}

function visible(el: Element) {
  const r = el.getBoundingClientRect()
  return r.top < window.innerHeight && r.bottom > 0
}

function aboveFold(el: Element) {
  return el.getBoundingClientRect().top < window.innerHeight * 0.92
}

function reveal(el: Element) {
  el.classList.add('is-in')
  observer?.unobserve(el)
}

function get() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        reveal(entry.target)
      }
    },
    desktop()
      ? { rootMargin: '0px 0px -8% 0px', threshold: 0.14 }
      : { rootMargin: '0px 0px 0px 0px', threshold: 0.08 },
  )
  return observer
}

export function observeReveal(el: Element | null) {
  if (!el || el.hasAttribute('data-observed')) return () => {}
  el.setAttribute('data-observed', '')

  if (el instanceof HTMLElement) {
    el.style.setProperty('--reveal-i', String(index++ % 8))
  }

  if (reduced()) {
    reveal(el)
    return () => {}
  }

  if (!desktop() && aboveFold(el)) {
    reveal(el)
    return () => {}
  }

  const io = get()
  io.observe(el)
  return () => io.unobserve(el)
}

export function bootReveal() {
  document.querySelectorAll('[data-reveal], [data-desk-reveal]').forEach((el) => {
    observeReveal(el)
  })
  armRevealFailsafe()
}

/** One-time failsafe: only reveal what is already on screen. */
function armRevealFailsafe() {
  window.setTimeout(() => {
    if (reduced()) return
    document.querySelectorAll('[data-reveal]:not(.is-in), [data-desk-reveal]:not(.is-in)').forEach((el) => {
      if (visible(el)) reveal(el)
    })
  }, 1600)
}
