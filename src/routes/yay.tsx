import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/yay')({
  component: YayPage,
})

function HeartSVG({ size, style, className }: { size: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className}>
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  )
}

type BurstHeart = { id: number; tx: string; ty: string; rot: string; left: string; top: string; size: number; color: string }

function YayPage() {
  const [burstHearts, setBurstHearts] = useState<BurstHeart[]>([])

  useEffect(() => {
    const hearts: BurstHeart[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      tx: `${(Math.random() - 0.5) * 600}px`,
      ty: `${-(Math.random() * 400 + 100)}px`,
      rot: `${(Math.random() - 0.5) * 720}deg`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 60 + 20}%`,
      size: Math.random() * 24 + 12,
      color: ['#e86474', '#f5a0a6', '#d4899a', '#f9c6c9'][Math.floor(Math.random() * 4)],
    }))
    setBurstHearts(hearts)
  }, [])

  const bgHearts = [
    { left: '8%', size: 18, delay: 0, duration: 9 },
    { left: '88%', size: 22, delay: 2, duration: 11 },
    { left: '40%', size: 14, delay: 4, duration: 8 },
    { left: '65%', size: 26, delay: 1, duration: 10 },
    { left: '22%', size: 20, delay: 3, duration: 12 },
  ]

  return (
    <main className="yay-page">
      {/* Burst hearts on load */}
      <div className="yay-burst">
        {burstHearts.map((h) => (
          <HeartSVG
            key={h.id}
            size={h.size}
            className="burst-heart"
            style={{
              left: h.left,
              top: h.top,
              color: h.color,
              '--tx': h.tx,
              '--ty': h.ty,
              '--rot': h.rot,
              animationDuration: `${Math.random() * 1 + 1.2}s`,
              animationDelay: `${Math.random() * 0.4}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Continuous floaters */}
      <div className="floating-hearts-container" style={{ opacity: 0.5 }}>
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

      {/* Photo frame */}
      <div className="yay-photo-frame">
        <picture>
          <source srcSet="/images/us2.heic" type="image/heic" />
          <img src="/images/us2.heic" alt="Us" />
        </picture>
      </div>

      <h1 className="yay-message">
        YAY I can't wait to see you!!!
      </h1>

      <div className="yay-hearts-row">
        <HeartSVG size={20} />
        <HeartSVG size={20} />
        <HeartSVG size={20} />
      </div>
    </main>
  )
}
