import { Award, Star } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export const BestProduct = () => {
  return (
    <div className="h-screen bg-white flex items-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
        <div>
           <p className="flex items-center gap-1 bg-primary p-1 py-1.5 text-xs rounded-sm font-semibold w-fit text-white">
                    <Award size="14" /> Produk Terbaik
            </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
           Produk Terbaik Untuk<br />
            <span className="text-primary">aksesoris anda</span>
          </h1>
          <p className="text-gray-600 mb-6">
           Temukan berbagai aksesoris gaming terbaik untuk menunjang performa dan gaya bermain Anda.
          </p>
          <a href="#diskon" className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Diskon Produk
          </a>
        </div>

        <div className="relative">
          <div className="bg-gray-200 rounded-3xl p-8">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                className="w-full"
            >
              <SwiperSlide>
                <img src="../../assets/7.png" alt="" className="w-60 md:w-72 mx-auto" />
              </SwiperSlide>
               <SwiperSlide>
                <img src="../../assets/8.png" alt="" className="w-60 md:w-72 mx-auto" />
              </SwiperSlide>
               <SwiperSlide>
                <img src="../../assets/9.png" alt="" className="w-60 md:w-72 mx-auto" />
              </SwiperSlide>
               <SwiperSlide>
                <img src="../../assets/10.png" alt="" className="w-60 md:w-72 mx-auto" />
              </SwiperSlide>
           </Swiper>
          </div>
          
        </div>
      </div>
        
    </div>
  );
};
