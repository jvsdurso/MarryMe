"use client"

import { gsap } from 'gsap'
import { React, useEffect, useRef } from 'react'
import { assets } from './assets/assets'

const App = () => {
  const imgRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5 } })

    const img = imgRef.current;
    const title = titleRef.current;

    tl.fromTo(img, {
      opacity: 0,
      x: -1000,
    }, {
      opacity: 1,
      x: 0,
      duration: 1.5,
    }).fromTo(title, {
      opacity: 0,
      y: -500,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.3,
    })
  }, [])

  return (
    <main role="main" className="min-h-screen">
      <section className="flex items-center justify-center h-screen relative">
        <figure className="absolute inset-0 -z-10 m-0">
          <img
            src={assets.foto_hero} 
            alt="Nós, um casal feliz representando nossa história de amor" 
            className="w-full h-full object-cover"
            ref={imgRef}
            loading="eager"
          />
        </figure>

        <header className="text-center">
          <h1 
            className="text-8xl text-white font-fleur"
            ref={titleRef}
          >
            Nossa história...
          </h1>
        </header>
      </section>
    </main>
  )
}

export default App