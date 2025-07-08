import * as React from "react"
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'
import MainHero from './components/MainHero'
import FormButton from './components/FormButton'
import Countdown from './components/Countdown'
import HeadingCounter from "./components/HeadingCounter"


function App() {
  return (
    <>
    <MainNavbar/>
    <MainHero/>
    <HeadingCounter/>
    <Countdown/>
    <FormButton/>
    <Footer/>
    </>
  )

}

export default App
