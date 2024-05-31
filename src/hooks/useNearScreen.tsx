import { useEffect, useState } from 'react'

interface NearScreen {
  distance?: string
  visor: React.RefObject<HTMLDivElement>
  once?: boolean
}
export default function useNearScreen({ distance = '10px', visor, once = true }: NearScreen) {
  const [isNearScreen, setIsNearScreen] = useState<boolean>(false)

  useEffect(() => {
    const fromElement = visor && visor.current
    if (!fromElement) return

    const onChange: IntersectionObserverCallback = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })
    observer.observe(fromElement)

    return () => observer && observer.disconnect()
  }, [distance, visor, once])

  return { isNearScreen }
}
