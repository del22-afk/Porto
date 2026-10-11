import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.28

    audio.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }

    try {
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
        src="/audio/ambient.mp3"
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
