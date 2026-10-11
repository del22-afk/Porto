import Background from './components/Background'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Landing from './components/Landing'
import MusicPlayer from './components/MusicPlayer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Landing />
        <Hero />
        <Projects />
      </main>
      <Footer />
      <MusicPlayer />
    </>
  )
}
