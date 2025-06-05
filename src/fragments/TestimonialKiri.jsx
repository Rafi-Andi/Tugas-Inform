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
    <div ref={sliderRef} className="keen-slider mb-4">
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Kevin 'K-Snipe' Wijaya"
          role="Valorant Enthusiast"
          message="Upgrade ke mouse gaming dari sini langsung terasa bedanya. Ringan, sensornya presisi, dan no delay sama sekali. Aim jadi lebih stabil dan flick shot lebih akurat. Buat yang serius main game FPS kompetitif, ini wajib punya."
          avatar="https://i.pravatar.cc/150?img=1"
        />

      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Anisa Putri"
          role="Desainer Grafis & Casual Gamer"
          message="Awalnya beli mouse wireless untuk kebutuhan kerja biar meja lebih rapi. Ternyata pas dipakai nge-game di akhir pekan, performanya luar biasa! Akurat, responsif, dan baterainya awet banget. Desainnya juga ergonomis, jadi tangan nggak cepat lelah."
          avatar="https://i.pravatar.cc/150?img=5"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Budi Santoso"
          role="Mahasiswa IT"
          message="Puas banget belanja di sini. Prosesnya cepat dan barangnya dijamin ori. Saya beli headphone stereo untuk dengerin musik sambil ngoding dan sesekali main game. Kualitas suaranya jernih dan bass-nya pas. Dengan harga diskon, ini best deal banget!"
          avatar="https://i.pravatar.cc/150?img=12"
        />
      </div>
      <div className="keen-slider__slide py-2">
       <TestimonialCard
          name="Reza 'Apex' Maulana"
          role="Pro Gamer & Streamer"
          message="Sebagai seorang pro player, kualitas audio itu segalanya. Headphone dari sini benar-benar game-changer! Suara langkah kaki musuh terdengar jelas, dan mikrofonnya jernih banget untuk komunikasi tim. Build quality-nya juga solid, nyaman dipakai berjam-jam. Recommended!"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>
      
    </div>
  );
}

export default TestiKanan;
