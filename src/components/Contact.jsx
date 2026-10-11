import { useState } from 'react'
import { profile } from '../data'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, visible } = useInView()
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const subject = encodeURIComponent(`Hello Delvyn — from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className={`section-head ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Contact</p>
        <h2>Have an idea, want to collaborate, or just say hello?</h2>
      </div>

      <div className={`contact-grid ${visible ? 'is-visible' : ''}`}>
        <div>
          <p className="contact-lead">
            Send me a message using this form, or reach out through one of the links below.
          </p>
          <ul className="social-list">
            {profile.socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" required placeholder="Your name" autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="you@email.com" autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required placeholder="Tell me a little about it." />
          </label>
          <button className="btn btn-primary" type="submit">
            {sent ? 'Opening email...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
