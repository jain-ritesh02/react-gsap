import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const App = () => {

  const boxRef = useRef(null)

  useGSAP(() => {
    gsap.to(boxRef.current, {
      duration: 2,
      x: 300,
      y: 300,
      rotation: 360,
      repeat: -1,
      delay: 1,
      duration: 1.5,
      yoyo: true,
    })
  })

  return (
    <div>
      <div ref={boxRef} className="box"></div>
    </div>
  )
}

export default App
