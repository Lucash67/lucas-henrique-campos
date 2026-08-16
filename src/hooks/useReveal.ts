import { useEffect, useRef } from 'react'
import { armRevealFailsafe, observeReveal } from '../lib/reveal'

let armed = false

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const stop = observeReveal(ref.current)
    if (!armed) {
      armed = true
      armRevealFailsafe()
    }
    return stop
  }, [])
  return ref
}
