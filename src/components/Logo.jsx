import { useGSAP } from "@gsap/react"
import gsap, { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const Logo = () => {
    useGSAP(()=>{
        gsap.fromTo(".logo",
            {
             maskSize: "10000px",   
            },
            {
            maskSize: "500px", 
            scrollTrigger: {
                trigger: ".logo",
                pin: true,
                start: "top top",
                scrub: 0.5
            }
        })
    },[])
  return (
    <section className="logo">
      <img src="/chicks.webp" alt="image" />
    </section>
  )
}

export default Logo
