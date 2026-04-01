'use client'

import { useState } from 'react'

interface YouTubeFacadeProps {
  videoId: string
  title: string
}

export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false)

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

  if (loaded) {
    return (
      <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden border border-brand-border">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden border border-brand-border group cursor-pointer bg-brand-bgDeep"
      aria-label={`Reproducir: ${title}`}
    >
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7 md:w-9 md:h-9 ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  )
}
