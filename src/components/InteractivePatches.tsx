'use client'

import Link from 'next/link'

export default function InteractivePatches() {
  return (
    <svg viewBox="0 0 1620 1080" preserveAspectRatio="xMidYMid slice">
      <Link href="/about" id="about-link">
        <g className="patch-group">
          <polygon 
            className="patch" 
            points="401.5,557 338.5,671 523,665.5 518.5,734.5 700.5,697 635.5,515.5 401.5,557" 
          />
          <text x="520" y="640" className="patch-text">About me!</text>
        </g>
      </Link>
    
      <Link href="/projects" id="project-link">
        <g className="patch-group">
          <polygon 
            className="patch" 
            points="1001.5,549.5 924,474.5 835,686 964.5,676.5 938,786.5 1200.5,734.5 1119.5,523 1001.5,549.5" 
          />
          <text x="997" y="633" className="patch-text">View my Projects</text>
        </g>
      </Link>
    </svg>
  )
}