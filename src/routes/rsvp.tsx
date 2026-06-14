import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useCallback, useRef } from 'react'

export const Route = createFileRoute('/rsvp')({
  component: RsvpPage,
})

const noLabels = ['No', 'Are u sure?', 'Really?', 'Think again...', 'Are you sure??', 'Come on...']

function HeartSVG({ size, style, className }: { size: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className}>
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  )
}

const bgHearts = [
  { left: '10%', size: 20, delay: 1, duration: 10 },
  { left: '80%', size: 16, delay: 3, duration: 8 },
  { left: '45%', size: 28, delay: 0.5, duration: 12 },
  { left: '65%', size: 14, delay: 5, duration: 9 },
  { left: '20%', size: 24, delay: 2, duration: 11 },
]

function RsvpPage() {
  const navigate = useNavigate()
  const [noIndex, setNoIndex] = useState(0)
  const [noPos, setNoPos] = useState<{ top: string; left: string; transform: string } | null>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleNoClick = useCallback(() => {
    setNoIndex((i) => (i + 1) % noLabels.length)

    const padding = 60
    const btnW = btnRef.current?.offsetWidth ?? 100
    const btnH = btnRef.current?.offsetHeight ?? 40
    const maxX = window.innerWidth - btnW - padding
    const maxY = window.innerHeight - btnH - padding

    const randX = Math.max(padding, Math.random() * maxX)
    const randY = Math.max(padding, Math.random() * maxY)

    setNoPos({
      top: `${randY}px`,
      left: `${randX}px`,
      transform: 'none',
    })
  }, [])

  return (
    <main className="rsvp-page">
      <div className="floating-hearts-container" style={{ opacity: 0.45 }}>
        {bgHearts.map((h, i) => (
          <HeartSVG
            key={i}
            size={h.size}
            className="float-heart"
            style={{
              left: h.left,
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
              bottom: '-5vh',
              color: '#e86474',
            }}
          />
        ))}
      </div>

      <div className="corner-ornament tl" style={{ opacity: 0.12 }}>❧</div>
      <div className="corner-ornament tr" style={{ opacity: 0.12 }}>❧</div>

      <h1 className="rsvp-title">So, what do you say?</h1>
      <p className="rsvp-subtitle">the moment of truth!!</p>

      <button
        className="rsvp-yes-btn"
        onClick={() => navigate({ to: '/yay' })}
      >
        Yes of course!
      </button>

      <p className="rsvp-divider">— or —</p>

      <button
        ref={btnRef}
        className="rsvp-no-btn"
        onClick={handleNoClick}
        style={
          noPos
            ? { position: 'fixed', top: noPos.top, left: noPos.left, transform: noPos.transform }
            : { position: 'relative', top: 'auto', left: 'auto', transform: 'none' }
        }
      >
        {noLabels[noIndex]}
      </button>
    </main>
  )
}
