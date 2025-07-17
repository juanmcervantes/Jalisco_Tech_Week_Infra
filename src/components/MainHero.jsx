import * as React from 'react'
import Desktop_HeroJTW from '../assets/JTW-HERO-1920x1080.jpg'
import Tablet_HeroJTW from '../assets/JTW-HERO-1200x900.jpg'
import Mobile_HeroJTW from '../assets/JTW-HERO-750x1334.jpg'


function MainHero() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <picture>
        <source media="(max-width: 768px)" srcSet={Mobile_HeroJTW} />
        <source media="(max-width: 1024px)" srcSet={Tablet_HeroJTW} />
        <img
          src={Desktop_HeroJTW}
          alt="Jalisco Tech Week Hero"
          className="object-cover w-full h-full"
        />
      </picture>
    </div>
  )
}

export default MainHero