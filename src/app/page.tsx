import BackgroundImage from '@/components/BackgroundImage'
import InteractivePatches from '@/components/InteractivePatches'

export default function Home() {
  return (
    <div className="container">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to My Website</h1>
          <p>Come and explore every pieces of me!</p>
        </div>
      </div>
      
      <BackgroundImage />
      <InteractivePatches />
    </div>
  )
}