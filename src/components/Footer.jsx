import { currentYear, profile } from '../data'

function ContactIcon({ label }) {
  if (label === 'Email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    )
  }

  if (label === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-fill">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.01 3.63 1.37.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.43 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.24-5.11 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    )
  }

  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-fill">
        <path d="M5.2 3.6a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9.3H7v11.3H3.4V9.3Zm5.8 0h3.4v1.55h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.15h-3.55v-5.45c0-1.3-.02-2.96-1.8-2.96-1.82 0-2.1 1.42-2.1 2.87v5.54H9.2V9.3Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="icon-dot" cx="17.6" cy="6.7" r="1" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="site-end">
      <div id="footer-contact" className="site-end-inner">
        <p className="site-end-label">Contact me</p>
        <nav className="site-end-socials" aria-label="Contact links">
          {profile.socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <ContactIcon label={item.label} />
            </a>
          ))}
        </nav>
      </div>

      <div className="site-end-bar">
        <p>© {currentYear} {profile.name}</p>
        <a className="site-end-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}
