import { useEffect, useState } from 'react'
import { projects } from '../data'
import { useInView } from '../hooks/useInView'
import PhotoSlot from './PhotoSlot'

const PREVIEW = 6

function ScreenGrid({ items, device }) {
  const [open, setOpen] = useState(false)
  const [activeScreen, setActiveScreen] = useState(null)
  const visible = open ? items : items.slice(0, PREVIEW)
  const rest = items.length - PREVIEW

  useEffect(() => {
    if (!activeScreen) return undefined
    const closeOnEscape = (event) => event.key === 'Escape' && setActiveScreen(null)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [activeScreen])

  return (
    <>
      <div className={`screen-grid ${device}`}>
        {visible.map((screen) => (
          <PhotoSlot
            key={screen.id}
            src={screen.src}
            alt={screen.label}
            caption={screen.label}
            hint="Add a screenshot here"
            path={screen.path}
            fullPage={screen.fullPage}
            variant={device === 'phone' ? 'phone' : 'web'}
            onOpen={setActiveScreen}
          />
        ))}
      </div>
      {rest > 0 && (
        <button className="btn btn-ghost screen-more" type="button" onClick={() => setOpen((v) => !v)}>
          {open ? 'Show fewer screens' : `View all screens (+${rest})`}
        </button>
      )}
      {activeScreen && (
        <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={`${activeScreen.alt} screenshot`} onClick={() => setActiveScreen(null)}>
          <button className="photo-lightbox-close" type="button" onClick={() => setActiveScreen(null)} aria-label="Close screenshot">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
          <img src={activeScreen.src} alt={activeScreen.alt} onClick={(event) => event.stopPropagation()} />
          <p>{activeScreen.alt} <span>· Click outside or press Esc to close</span></p>
        </div>
      )}
    </>
  )
}

function ProjectBlock({ project, index }) {
  const { ref, visible } = useInView()
  return (
    <article
      ref={ref}
      className={`project-block ${visible ? 'is-visible' : ''}`}
      style={{ '--delay': `${index * 80}ms` }}
    >
      <header className="project-head">
        <div className="project-main">
          <p className="project-top">{project.year}</p>
          <h3>{project.title}</h3>
          <p className="project-sub">{project.subtitle}</p>
        </div>
        <div className="project-details">
          <p className="project-role">{project.role}</p>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
            <a
              className="project-github"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} GitHub repository`}
              title="View GitHub repository"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {project.screens.map((group) => (
        <div key={group.group} className="screen-group">
          <h4>{group.group}</h4>
          <ScreenGrid items={group.items} device={group.device} />
        </div>
      ))}
    </article>
  )
}

export default function Projects() {
  const { ref, visible } = useInView()

  return (
    <section id="projects" className="section">
      <div ref={ref} className={`section-head ${visible ? 'is-visible' : ''}`}>
        <h2 className="projects-title">Projects</h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectBlock key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
