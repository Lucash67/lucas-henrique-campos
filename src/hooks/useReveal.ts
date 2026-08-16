import { useEffect, useRef } from 'react'
import { observeReveal } from '../lib/reveal'

/** Attach to any element to fade + rise it once when it enters the viewport. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => observeReveal(ref.current), [])
  return ref
}
