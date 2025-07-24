'use client'

import Link from 'next/link'

export default function InteractivePatches() {
  return (
    <svg viewBox="0 0 1620 1080" preserveAspectRatio="xMidYMid slice">
      <Link href="/about" id="about-link" className="patch-link">
        <g className="patch-group">
          <polygon 
            className="patch" 
            points="401.5,557 338.5,671 523,665.5 518.5,734.5 700.5,697 635.5,515.5 401.5,557" 
          />
          <text x="520" y="640" className="patch-text">About me!</text>
        </g>
      </Link>

      <Link href="https://github.com/ngavu2004" id="github-link" className="patch-link" target="_blank" rel="noopener noreferrer">
        <g className="patch-group">
          <polygon 
            className="patch" 
            points="988,370.5 926,471 997.5,547.5 1110,528 1188.5,379 1124,361 988,370.5" 
          />
          <text x="1050" y="450" className="patch-text">GitHub</text>
        </g>
      </Link>

      <Link href="/resume" id="resume-link" className="patch-link">
        <g className="patch-group">
          <polygon 
            className="patch" 
            points="884.5,522 833.5,685 964.5,677.5 932,782.5 1192,726 1116,522 998.5,549.5 921.5,469 884.5,522" 
          />
          <text x="997" y="633" className="patch-text">Resume</text>
        </g>
      </Link>

      <Link href="https://www.linkedin.com/in/nga-vu-269626226/" id="linkedin-link" className="patch-link" target="_blank" rel="noopener noreferrer">
        <g className="patch-group">
          <polygon
            className="patch"
            points="1196,731.5 1078,759.5 1099.5,920 1226,911.5 1226,911.5 1226,813 1239,797 1196,731.5"
          />
          <text x="1150" y="830" className="patch-text">LinkedIn</text>
        </g>
      </Link>

    </svg>
  )
}