import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: EnvelopePage,
})

const bgHeartPositions = [
  { left: '8%', size: 28, delay: 0, duration: 12 },
  { left: '20%', size: 18, delay: 2, duration: 9 },
  { left: '33%', size: 40, delay: 4, duration: 15 },
  { left: '47%', size: 22, delay: 1, duration: 11 },
  { left: '60%', size: 32, delay: 3, duration: 13 },
  { left: '72%', size: 16, delay: 5, duration: 8 },
  { left: '85%', size: 26, delay: 1.5, duration: 10 },
  { left: '93%', size: 20, delay: 6, duration: 14 },
  { left: '14%', size: 14, delay: 7, duration: 9 },
  { left: '55%', size: 36, delay: 2.5, duration: 16 },
]

function HeartSVG({ size, style, className }: { size: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      className={className}
    >
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  )
}

function EnvelopePage() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate({ to: '/letter' })
  }

  return (
    <main className="envelope-page">
      <div className="corner-ornament tl">❧</div>
      <div className="corner-ornament tr">❧</div>
      <div className="corner-ornament bl">❧</div>
      <div className="corner-ornament br">❧</div>

      <div className="envelope-bg-hearts">
        {bgHeartPositions.map((h, i) => (
          <HeartSVG
            key={i}
            size={h.size}
            className="bg-heart"
            style={{
              left: h.left,
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
              bottom: '-10vh',
            }}
          />
        ))}
      </div>

      <div
        className="envelope-wrapper"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        aria-label="Open invitation"
      >
        <div className="envelope-shadow">
          <div className="envelope-body">
            <div className="envelope-photo">
              <picture>
                <source srcSet="/images/us1.heic" type="image/heic" />
                <img src="/images/us1.heic" alt="Us" />
              </picture>
              <div className="envelope-photo-tint" />
            </div>

            <div className="envelope-flap" />
            <div className="envelope-flap-fold" />
            <div className="envelope-left-fold" />
            <div className="envelope-right-fold" />

            <div className="envelope-seal">
              <HeartSVG size={26} />
            </div>
          </div>
        </div>
      </div>

      <div className="envelope-label">
        <h1>Date Night</h1>
        <p>a special invitation</p>
      </div>

      <p className="tap-hint">tap to open</p>
    </main>
  )
}
