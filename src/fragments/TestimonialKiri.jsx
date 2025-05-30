import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialCard from "../components/tetimoniCard";

const animation = { duration: 20000, easing: (t) => t };

function TestiKanan() {
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
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Randi Permana"
          role="Web Developer"
          message="Website ini sangat membantu saya dalam mengelola usaha kecil saya. UI-nya simpel dan responsif!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Randi Permana"
          role="Web Developer"
          message="Website ini sangat membantu saya dalam mengelola usaha kecil saya. UI-nya simpel dan responsif!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Randi Permana"
          role="Web Developer"
          message="Website ini sangat membantu saya dalam mengelola usaha kecil saya. UI-nya simpel dan responsif!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Randi Permana"
          role="Web Developer"
          message="Website ini sangat membantu saya dalam mengelola usaha kecil saya. UI-nya simpel dan responsif!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Randi Permana"
          role="Web Developer"
          message="Website ini sangat membantu saya dalam mengelola usaha kecil saya. UI-nya simpel dan responsif!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Randi Permana"
          role="Web Developer"
          message="Website ini sangat membantu saya dalam mengelola usaha kecil saya. UI-nya simpel dan responsif!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Randi Permana"
          role="Web Developer"
          message="Website ini sangat membantu saya dalam mengelola usaha kecil saya. UI-nya simpel dan responsif!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Randi Permana"
          role="Web Developer"
          message="Website ini sangat membantu saya dalam mengelola usaha kecil saya. UI-nya simpel dan responsif!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Randi Permana"
          role="Web Developer"
          message="Website ini sangat membantu saya dalam mengelola usaha kecil saya. UI-nya simpel dan responsif!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
    </div>
  );
}

export default TestiKanan;
