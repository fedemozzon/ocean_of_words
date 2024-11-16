'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [phrase, setPhrase] = useState('')
  const [charCount, setCharCount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    setCharCount(phrase.length)
  }, [phrase])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phrase.trim() && phrase.length <= 50) {
      const phrases = JSON.parse(localStorage.getItem('phrases') || '[]')
      phrases.push(phrase.trim())
      localStorage.setItem('phrases', JSON.stringify(phrases))
      setPhrase('')
      router.push('/ocean')
    }
  }

  return (
    <div className="w-full max-w-md px-8 py-10 bg-[#f8f0e0] rounded-lg shadow-lg border border-[#d3b17d] mx-auto">
      <h1 className="text-3xl font-serif text-[#5c4b3a] mb-8 text-center">Phrase Ocean</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Inscribe your phrase here..."
            className="input-field"
            maxLength={50}
            required
            aria-label="Enter a short phrase"
          />
          <span className="absolute right-3 bottom-3 text-xs text-[#8b6b4a]">
            {charCount}/50
          </span>
        </div>
        <button
          type="submit"
          className="submit-button"
          aria-label="Submit phrase"
        >
          Commit to Parchment
        </button>
      </form>
      <Link 
        href="/ocean" 
        className="block mt-8 text-center text-[#8b6b4a] hover:text-[#5c4b3a] transition duration-200 ease-in-out font-serif"
      >
        View the Ocean of Words
      </Link>
    </div>
  )
}