import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/details')({
  component: DetailsPage,
})

function HeartSVG({ size, style, className }: { size: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className}>
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ShirtIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}

const bgHearts = [
  { left: '5%', size: 24, delay: 0, duration: 12 },
  { left: '85%', size: 18, delay: 3, duration: 9 },
  { left: '50%', size: 30, delay: 6, duration: 14 },
  { left: '25%', size: 14, delay: 1.5, duration: 8 },
  { left: '70%', size: 22, delay: 4, duration: 11 },
]

function DetailsPage() {
  const navigate = useNavigate()

  const items = [
    {
      icon: <CalendarIcon />,
      label: 'Date',
      value: 'Wednesday, June 17th',
      sub: 'Pick up at 3:00 PM',
      delay: '0.3s',
    },
    {
      icon: <StarIcon />,
      label: 'Main Event',
      value: 'A Harrowing Escape',
      sub: 'Adventure awaits',
      delay: '0.4s',
    },
    {
      icon: <MapPinIcon />,
      label: 'Dinner',
      value: 'A Taste of Peru',
      sub: 'An evening to remember',
      delay: '0.5s',
    },
    {
      icon: <ClockIcon />,
      label: 'Time',
      value: '3:00 PM',
      sub: "I'll be there to pick you up",
      delay: '0.6s',
    },
    {
      icon: <ShirtIcon />,
      label: 'Dress Code',
      value: 'Casual & Cute',
      sub: 'Nice jeans & a comfy top — just be you',
      delay: '0.7s',
    },
  ]

  return (
    <main className="details-page">
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

      <h1 className="details-title">The Details</h1>
      <p className="details-subtitle">everything you need to know </p>

      <div className="details-card">
        <div className="details-card-header">
          <span>Our Date Night</span>
        </div>

        {items.map((item, i) => (
          <div
            key={i}
            className="details-item"
            style={{ animationDelay: item.delay }}
          >
            <div className="details-item-icon">
              {item.icon}
            </div>
            <div className="details-item-content">
              <div className="details-item-label">{item.label}</div>
              <div className="details-item-value">{item.value}</div>
              <div className="details-item-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="continue-btn"
        onClick={() => navigate({ to: '/rsvp' })}
      >
        Continue
      </button>
    </main>
  )
}
