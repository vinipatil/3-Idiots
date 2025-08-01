import { useEffect, useState } from 'react'
import quotes from '../data/quotes'

export default function RandomQuote() {
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  )
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length)
        setFade(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const quote = quotes[quoteIndex]

  const typeStyles = {
  funny: 'bg-yellow-100 border-yellow-300 text-yellow-800',
  emotional: 'bg-pink-100 border-pink-300 text-pink-800',
  sincere: 'bg-blue-100 border-blue-300 text-blue-800',
}


  return (
    <div className="flex flex-col items-center mt-10">
      {/* Badge */}
      <div className="text-center mb-3">
      </div>

      {/* Fancy Blob Quote Box */}
     <div
  className={`relative max-w-2xl px-8 py-6 font-serif italic leading-relaxed shadow-2xl rounded-[2.5rem] transition-opacity duration-500 ease-in-out ${
    fade ? 'opacity-100' : 'opacity-0'
  } ${typeStyles[quote.type]}`}
>

        <span className="text-4xl text-black leading-none mr-1">“</span>
        {quote.text}
        <span className="text-4xl text-black leading-none ml-1">”</span>

        {/* Quote Tail (speech bubble shape) */}
        <div className="absolute -bottom-4 left-10 w-5 h-5 bg-white border-l-2 border-b-2 border-pink-300 rotate-45 shadow-md"></div>
      </div>
    </div>
  )
}
