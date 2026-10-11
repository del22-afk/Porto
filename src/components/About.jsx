import { profile } from '../data'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, visible } = useInView()

  return (
    <section id="about" className="section" ref={ref}>
      <div className={`section-head ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">About me</p>
        <h2>Frontend yang rapi, kerja tim yang jelas.</h2>
      </div>

      <div className={`about-grid ${visible ? 'is-visible' : ''}`}>
        <div className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="about-side">
          <p className="about-meta">{profile.location}</p>
          <ul className="skill-list">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
