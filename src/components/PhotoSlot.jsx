import { useState } from 'react'

export default function PhotoSlot({ src, alt, caption, hint, path, fullPage = false, variant = 'photo', onOpen }) {
  const [ok, setOk] = useState(false)

  return (
    <figure
      className={`photo-slot ${variant} ${fullPage ? 'full-page' : ''} ${ok ? 'has-photo' : 'is-empty'}`}
      title={path}
    >
      <div className="photo-frame">
        {!ok && (
          <div className="photo-empty" role="img" aria-label={alt}>
            <span className="photo-mark" aria-hidden="true" />
            <strong>{caption || alt}</strong>
            <span>{hint || 'Add an image here'}</span>
          </div>
        )}
        {ok && (
          <button className="photo-image-trigger" type="button" onClick={() => onOpen?.({ src, alt })} aria-label={`Open ${alt} screenshot`}>
            <img src={src} alt={alt} onError={() => setOk(false)} />
          </button>
        )}
        {!ok && <img src={src} alt="" onLoad={() => setOk(true)} onError={() => setOk(false)} />}
      </div>
    </figure>
  )
}
