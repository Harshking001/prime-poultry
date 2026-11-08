import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"

const Hero = () => {

    useGSAP(()=>{
        gsap.from("#chicks",{
            borderRadius: "50%",
            duration: 2,
            // delay:0.5,
        })

        gsap.from("#machine", {
            scale: 0,
            // delay: 0.5,
            duration: 2
        })
    },[])
  return (
    <section id="hero">
      <img src="/logo.png" alt="logo" id="logo" />
      <img src="/chicks.webp" alt="image" id="chicks" />
      <img src="/hero.webp" alt="image" id="eggs" />
      <img src="/machine.jpeg" alt="image" id="machine" />
    </section>
  )
}

export default Hero
