'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Ocean() {
  const [phrases, setPhrases] = useState<string[]>([])

  useEffect(() => {
    const storedPhrases = JSON.parse(localStorage.getItem('phrases') || '[]')
    setPhrases(storedPhrases)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif text-[#5c4b3a] mb-8 text-center">Ocean of Words</h1>
      <div className="bg-[#f8f0e0] p-8 rounded-lg shadow-lg min-h-[300px] mb-8 border border-[#d3b17d]">
        {phrases.map((phrase, index) => (
          <span
            key={index}
            className="inline-block m-1 px-3 py-1 bg-[#f4e8d1] text-[#5c4b3a] rounded-full text-sm font-serif border border-[#d3b17d]"
            style={{
              fontSize: `${Math.random() * 0.5 + 0.75}rem`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            {phrase}
          </span>
        ))}
      </div>
      <div className="text-center">
        <Link 
          href="/" 
          className="text-[#8b6b4a] hover:text-[#5c4b3a] transition duration-200 ease-in-out font-serif"
        >
          Return to Inscribe
        </Link>
      </div>
    </div>
  )
}