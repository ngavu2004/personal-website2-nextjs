import BackgroundImage from '@/components/BackgroundImage'
import InteractivePatches from '@/components/InteractivePatches'

export default function Home() {
  return (
    <div className="container">
      <div className="overlay">
        <div className="content">
          <h1>Nga (Jane) Vu</h1>
          <p>Software Engineer | 📍Tempe,AZ</p>
        </div>
      </div>
      
      <BackgroundImage />
      <InteractivePatches />
    </div>
  )
}