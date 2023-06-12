import Image from 'next/image'
import Nav from '../components/NavBar'
import Header from '../components/Header'
import './globals.css'

export default function Home() {
  return (
   <>
   
    <Nav />
   <Header  text="Frontend Developer React | TypeScript" imageUrl="/assets/joseph.jpg"  /> 
    
   </>
  )
}
