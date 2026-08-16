let observer: IntersectionObserver | null = null
let index = 0

function reduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function aboveFold(el: Element) {
  return el.getBoundingClientRect().top < window.innerHeight * 0.92
}

function onScreen(el: Element) {
  const r = el.getBoundingClientRect()
  return r.top < window.innerHeight && r.bottom > 0
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
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
  )
  return observer
}

export function observeReveal(el: Element | null) {
  if (!el || el.hasAttribute('data-observed')) return () => {}
  el.setAttribute('data-observed', '')

  if (el instanceof HTMLElement) {
    el.style.setProperty('--reveal-i', String(index++ % 6))
  }

  if (reduced() || aboveFold(el)) {
    reveal(el)
    return () => {}
  }

  const io = get()
  io.observe(el)
  return () => io.unobserve(el)
}

export function armRevealFailsafe() {
  window.setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => {
      if (onScreen(el)) reveal(el)
    })
  }, 1600)
}
