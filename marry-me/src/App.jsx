"use client"

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { assets } from './assets/assets'

const App = () => {
  const imgRef = useRef(null)
  const titleRef = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const section4Ref = useRef(null)
  const section5Ref = useRef(null)
  const section6Ref = useRef(null)

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

      <section 
        ref={section2Ref} 
        className="flex items-center justify-center h-screen bg-linear-to-br from-pink-50 to-purple-100"
      >
        <div className="text-center max-w-4xl px-8">
          <h2 className="text-6xl text-purple-800 font-fleur mb-8">Como Tudo Começou</h2>
        </div>
      </section>

      <section 
        ref={section3Ref} 
        className="flex items-center justify-center h-screen bg-linear-to-tr from-rose-100 to-red-100"
      >
        <div className="text-center max-w-4xl px-8">
          <h2 className="text-6xl text-rose-600 font-fleur mb-8">Momentos Especiais</h2>
        </div>
      </section>

      <section 
        ref={section4Ref} 
        className="flex items-center justify-center h-screen bg-linear-to-bl from-blue-50 to-indigo-100"
      >
        <div className="text-center max-w-4xl px-8">
          <h2 className="text-6xl text-indigo-700 font-fleur mb-8">Por que te amo?</h2>
        </div>
      </section>

      <section 
        ref={section5Ref} 
        className="flex items-center justify-center h-screen bg-linear-to-br from-green-50 to-emerald-100"
      >
        <div className="text-center max-w-4xl px-8">
          <h2 className="text-6xl text-emerald-700 font-fleur mb-8">Você me faz muito feliz!!!</h2>
        </div>
      </section>

      <section 
        ref={section6Ref} 
        className="flex items-center justify-center h-screen bg-linear-to-tl from-yellow-50 to-orange-100"
      >
        <div className="text-center max-w-4xl px-8">
          <h2 className="text-6xl text-orange-600 font-fleur mb-8">Por fim uma pergunta...</h2>
        </div>
      </section>
    </main>
  )
}

export default App