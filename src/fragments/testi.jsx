import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import TestimonialCard from "../components/tetimoniCard"
import { Users } from "react-feather"
import TestiKanan from "./TestimonialKiri"
import TestiKiri from "./TestimonialKanan"

const animation = { duration: 15000, easing: (t) => t }


function Testimonial() {
    const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
        spacing: 16,
        perView: 3, 
    },
    breakpoints: {
    "(max-width: 1024px)": {
      slides: {
        perView: 2,
        spacing: 12,
      },
    },
    "(max-width: 640px)": {
      slides: {
        perView: 1,
        spacing: 8,
      },
    },
    },
    created(s) {
      s.moveToIdx(-5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation)
    },
  })

    return (
        <div className="testimonial-container py-20 px-5 lg:px-20 ">
            <div className="text-center mb-16 flex items-center flex-col">
                <p className="flex items-center gap-1 bg-primary p-1 py-1.5 text-xs rounded-sm font-semibold w-fit text-white">
                    <Users size="14" /> Testimoni
                </p>
                <h2 className="text-4xl font-bold mb-6 text-primary">
                    Apa Kata Mereka?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Testimoni dari para pelanggan setia GameLynx yang telah merasakan kualitas produk dan layanan kami.
                </p>
            </div>


            <div className="w-full   h-fit">
               <TestiKanan/>
               <TestiKiri/>
            </div>
        </div>

    )
}

export default Testimonial;