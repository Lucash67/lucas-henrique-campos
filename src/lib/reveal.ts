let observer: IntersectionObserver | null = null

function get() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        observer?.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
  )
  return observer
}

/** Registers an element with the shared reveal observer. */
export function observeReveal(el: Element | null) {
  if (!el) return () => {}
  const io = get()
  io.observe(el)
  return () => io.unobserve(el)
}
