import { profile } from '../data'
import PhotoSlot from './PhotoSlot'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <h1 className="hero-title reveal delay-1">
          <span className="hero-intro">Hey, I’m</span>
          <span className="hero-name">Delvyn <em>Putra.</em></span>
        </h1>
        <p className="hero-role reveal delay-2">WEB DEVELOPER &amp; DATA ENTHUSIAST</p>
        <p className="hero-tag reveal delay-3">
          I build thoughtful digital experiences by combining clean code, curious ideas, and a
          little attention to detail. This is a short introduction you can replace with your own.
        </p>
        <div className="hero-actions reveal delay-4">
          <a className="btn btn-primary" href="#projects">
            Explore projects
          </a>
        </div>
      </div>

      <div className="hero-photo reveal delay-2">
        <PhotoSlot
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          caption="Profile photo"
          hint="Add your photo here"
          path={profile.photoPath}
          variant="portrait"
        />
      </div>
    </section>
  )
}
