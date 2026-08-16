import { useEffect, useRef } from 'react'
import { observeReveal } from '../lib/reveal'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => observeReveal(ref.current), [])
  return ref
}
