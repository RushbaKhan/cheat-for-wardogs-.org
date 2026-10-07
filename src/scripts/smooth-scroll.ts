import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/** Site-wide inertial scroll (runs once from BaseLayout). */
function initSmoothScroll() {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (document.documentElement.dataset.smoothScroll === '1') return

  document.documentElement.dataset.smoothScroll = '1'

  const lenis = new Lenis({
    duration: 1.65,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    smoothWheel: true,
    lerp: 0.085,
    wheelMultiplier: 0.82,
    touchMultiplier: 1.25,
    syncTouch: true,
    syncTouchLerp: 0.075,
    autoRaf: true,
    anchors: true,
  })

  document.documentElement.classList.add('lenis-smooth')

  window.addEventListener('beforeunload', () => {
    lenis.destroy()
    document.documentElement.classList.remove('lenis-smooth')
    delete document.documentElement.dataset.smoothScroll
  })
}

initSmoothScroll()
