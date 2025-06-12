import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialCard from "../components/tetimoniCard";

const animation = { duration: 20000, easing: (t) => t };

function TestiKiri() {
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
      s.moveToIdx(-5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
<div className="keen-slider__slide">
        <TestimonialCard
          name="Diana Lestari"
          role="Penikmat Musik & Editor Video"
          message="Beli headphone ini awalnya untuk gaming, tapi ternyata kualitas suaranya untuk dengerin musik luar biasa! Detail vokal dan instrumen terdengar jernih, bass-nya juga solid tapi nggak berlebihan. Sangat membantu pas lagi editing video."
          avatar="https://i.pravatar.cc/150?img=47"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Hendra Gunawan"
          role="Orang Tua"
          message="Pesan mouse gaming untuk hadiah ulang tahun anak saya. Proses checkout mudah, pengiriman super cepat. Kualitasnya kokoh, kelihatannya awet untuk pemakaian anak-anak. Anak saya senang sekali, katanya jadi makin jago mainnya. Terima kasih!"
          avatar="https://i.pravatar.cc/150?img=60"
        />
      </div>
      <div className="keen-slider__slide">
        <TestimonialCard
          name="Siti Aisyah"
          role="Mahasiswi & Mobile Gamer"
          message="Headset wireless-nya favoritku! Baterainya tahan lama, pas banget buat maraton kelas online seharian. Koneksi Bluetooth stabil, dipakai buat dengerin musik di kereta atau main Mobile Legends nggak pernah putus-putus. Mantap!"
          avatar="https://i.pravatar.cc/150?img=44"
        />
      </div>
      <div className="keen-slider__slide py-2">
       <TestimonialCard
          name="Agung Prasetyo"
          role="System Administrator"
          message="Sudah pakai mouse ini lebih dari 6 bulan untuk kerja dan main. Build quality-nya juara, masih terasa solid sampai sekarang. Klik-nya empuk dan presisi, nyaman dipakai berjam-jam. Investasi jangka panjang yang tidak mengecewakan."
          avatar="https://i.pravatar.cc/150?img=59"
        />
      </div>
    </div>
  );
}

export default TestiKiri;
