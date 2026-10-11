import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const manuallyPaused = useRef(false)
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.28

    audio.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))

    const resumeAfterInteraction = (event) => {
      if (manuallyPaused.current || event.target.closest?.('.music') || !audio.paused) return
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false))
    }

    window.addEventListener('pointerdown', resumeAfterInteraction)
    window.addEventListener('keydown', resumeAfterInteraction)
    return () => {
      window.removeEventListener('pointerdown', resumeAfterInteraction)
      window.removeEventListener('keydown', resumeAfterInteraction)
    }
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      manuallyPaused.current = true
      audio.pause()
      setPlaying(false)
      return
    }

    try {
      manuallyPaused.current = false
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  const replay = async (event) => {
    const audio = event.currentTarget
    audio.currentTime = 0
    try {
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  return (
    <div className={`music ${playing ? 'is-playing' : ''}`}>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/ambient.mp3`}
        autoPlay
        loop
        preload="metadata"
        onEnded={replay}
      />
      <button type="button" onClick={toggle} aria-pressed={playing}>
        <span className="music-disc" />
        <span>{playing ? 'Pause music' : 'Play music'}</span>
      </button>
    </div>
  )
}
