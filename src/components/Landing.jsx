export default function Landing() {
  return (
    <section className="landing" id="top" aria-labelledby="landing-title">
      <div className="landing-glow" aria-hidden="true" />
      <span className="float-note note-one" aria-hidden="true">♫</span>
      <span className="float-note note-two" aria-hidden="true">♪</span>
      <span className="float-star star-one" aria-hidden="true">✳</span>
      <span className="float-star star-two" aria-hidden="true">✦</span>

      <div className="landing-content">
        <p className="landing-kicker"><span className="live-dot" /> A little corner of the internet</p>
        <h1 id="landing-title">Take a breath.<br /><em>Stay a while.</em></h1>
        <p className="landing-copy">Play some music, take a moment, and explore a few things I have been working on.</p>
        <a className="btn btn-primary landing-cta" href="#home">
          Enter portfolio <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="landing-player" aria-hidden="true">
        <span className="landing-vinyl"><span /></span>
        <div className="landing-track">
          <strong>slow moments</strong>
          <span>a soft place to land</span>
        </div>
        <span className="landing-wave"><i /><i /><i /><i /><i /><i /><i /></span>
      </div>
      <a className="landing-skip" href="#home">Scroll to continue</a>
    </section>
  )
}
