import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'



interface WaterTextProps {
    text: string;
}

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

export default function WaterText({ text }: WaterTextProps) {
  const [open, toggle] = useState(false)
  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      reverse: open,
      from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
      to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
      config: { duration: 3000 },
    }),
    [open]
  )

  return (
    <div  onClick={() => toggle(!open)}>
      <animated.svg style={{ scale, opacity }} viewBox="0 0 2000 446">

        <defs>
          <filter id="water">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" result="TURB" seed="8" />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
          <text fill="lightblue" >{text}</text>
            </div>
        </g>
      </animated.svg>
    </div>
  )
}
