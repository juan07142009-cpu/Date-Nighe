import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/letter')({
  component: LetterPage,
})

const floatingHearts = [
  { left: '5%', size: 20, delay: 0, duration: 8 },
  { left: '18%', size: 14, delay: 1.5, duration: 6 },
  { left: '30%', size: 26, delay: 3, duration: 10 },
  { left: '44%', size: 16, delay: 0.5, duration: 7 },
  { left: '58%', size: 30, delay: 2, duration: 9 },
  { left: '70%', size: 12, delay: 4, duration: 6.5 },
  { left: '82%', size: 22, delay: 1, duration: 8.5 },
  { left: '92%', size: 18, delay: 3.5, duration: 7 },
  { left: '25%', size: 10, delay: 5, duration: 5.5 },
  { left: '75%', size: 34, delay: 2.5, duration: 11 },
  { left: '50%', size: 16, delay: 6, duration: 8 },
  { left: '12%', size: 28, delay: 4.5, duration: 9.5 },
]

// Scattered cursive hearts around the letter
const scatteredHearts = [
  { top: '8%', left: '3%', rotate: '-15deg', fontSize: '2.2rem', opacity: 0.55 },
  { top: '12%', right: '4%', rotate: '20deg', fontSize: '1.8rem', opacity: 0.45 },
  { top: '28%', left: '1%', rotate: '-8deg', fontSize: '1.4rem', opacity: 0.4 },
  { top: '35%', right: '2%', rotate: '12deg', fontSize: '2rem', opacity: 0.5 },
  { top: '52%', left: '2%', rotate: '-20deg', fontSize: '1.6rem', opacity: 0.42 },
  { top: '60%', right: '1%', rotate: '8deg', fontSize: '2.4rem', opacity: 0.38 },
  { top: '72%', left: '3%', rotate: '15deg', fontSize: '1.2rem', opacity: 0.5 },
  { top: '78%', right: '3%', rotate: '-10deg', fontSize: '1.8rem', opacity: 0.45 },
  { top: '88%', left: '5%', rotate: '5deg', fontSize: '1.5rem', opacity: 0.4 },
  { top: '92%', right: '5%', rotate: '-18deg', fontSize: '1.3rem', opacity: 0.48 },
]

function HeartSVG({ size, style, className }: { size: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className}>
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  )
}

function LetterPage() {
  const navigate = useNavigate()

  return (
    <main className="letter-page">
      {/* Floating hearts background */}
      <div className="floating-hearts-container">
        {floatingHearts.map((h, i) => (
          <HeartSVG
            key={i}
            size={h.size}
            className="float-heart"
            style={{
              left: h.left,
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
              bottom: '-5vh',
              color: i % 3 === 0 ? '#e86474' : i % 3 === 1 ? '#f5a0a6' : '#d4899a',
            }}
          />
        ))}
      </div>

      {/* Scattered cursive hearts around letter */}
      {scatteredHearts.map((h, i) => (
        <div
          key={i}
          className="cursive-hearts"
          style={{
            top: h.top,
            left: 'left' in h ? h.left : undefined,
            right: 'right' in h ? h.right : undefined,
            transform: `rotate(${h.rotate})`,
            fontSize: h.fontSize,
            opacity: h.opacity,
            color: i % 2 === 0 ? '#e86474' : '#d4899a',
          }}
        >
          ♥
        </div>
      ))}

      {/* The letter itself */}
      <div className="letter-card">
        <div className="letter-lines" />

        <div className="letter-decoration-top">
          <span>♥</span>
          <span>♥</span>
          <span className="center-ornament">❤</span>
          <span>♥</span>
          <span>♥</span>
        </div>

        <div className="letter-body">
          <p>Hey Beautiful,</p>
          <br />
          <p>
            I miss you and I want to take you on a date and spend some time with you!!!
          </p>
          <br />
          <p>
            <em>te quiero mucho mi reina hermosa.</em>
          </p>
          <br />
          <p>Forever and always.</p>
        </div>

        <div className="letter-signature">
          — JD
        </div>

        <div className="letter-decoration-bottom">
          <span>♥</span>
          <span style={{ color: '#e86474', fontSize: '1.8rem' }}>❤</span>
          <span>♥</span>
          <span style={{ color: '#e86474', fontSize: '1.8rem' }}>❤</span>
          <span>♥</span>
        </div>
      </div>

      <button
        className="view-details-btn"
        onClick={() => navigate({ to: '/details' })}
      >
        View More Details
      </button>
    </main>
  )
}
