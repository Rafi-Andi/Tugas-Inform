import { Star, ShoppingCart, AlertCircle } from "react-feather";

function FiturUtama() {
  return (
    <div className="mt-12">
      <div className="">
        <div className="flex justify-center">
          <p className="flex items-center gap-1 bg-primary p-1 py-1.5 text-xs rounded-sm font-semibold w-fit text-white">
            <Star size="14" /> Fitur Utama
          </p>
        </div>
        <h1 className="text-center font-bold mt-1 text-primary text-3xl">
          Fitur Utama Headphone
        </h1>
        <p className="text-center mx-auto px-10 lg:w-1/2 font-semibold text-xs text-gray-600">Headphone kami dirancang untuk menghadirkan pengalaman mendengarkan yang luar biasa.</p>
      </div>

      <div className="flex flex-col p-4 lg:p-0  lg:flex-row w-full lg:w-3/4 justify-center lg:mx-auto mt-10 ">
        <div className="kanan lg:w-1/2 flex justify-center">
             <img src="../../assets/headphoneLogitech.webp" alt="" className="w-3/4"/>
        </div>

        <div className="kiri lg:w-1/2">
            <h2 className="font-bold text-gray-800 text-lg">Pro X Wireless Logitech</h2>
            <div className="flex mt-1">
                <img src="../../assets/bintangPrimary.svg" alt="" className="w-4"/>
                <img src="../../assets/bintangPrimary.svg" alt="" className="w-4"/>
                <img src="../../assets/bintangPrimary.svg" alt="" className="w-4"/>
                <img src="../../assets/bintangPrimary.svg" alt="" className="w-4"/>
                <img src="../../assets/bintangGray.svg" alt="" className="w-4"/>
            </div>
            <p className="mt-2 text-xs text-gray-400 font-semibold leading-4">Rasakan kebebasan bermain tanpa kabel dengan kualitas profesional melalui Logitech G PRO X WIRELESS, headset gaming yang dirancang untuk para juara. Didukung teknologi LIGHTSPEED Wireless, headset ini menawarkan koneksi super cepat, stabil, dan tanpa lag dengan daya tahan baterai hingga 20 jam.</p>
            <div className="flex items-center mt-2">
              <h2 className="font-bold text-gray-800 text-sm mr-23">Harga: </h2>
              <p className="font-bold text-xs mr-1 text-gray-700">Rp. 1.379.000</p>
              <p className="text-gray-400 line-through text-xs">Rp. 1.970.000</p>
            </div>
            <div className="flex items-center mt-2">
              <h2 className="font-bold text-gray-800 text-sm mr-22">Warna: </h2>
              <img src="../../assets/headphoneLogitech.webp" alt="" className="w-9 border-[1.5px] rounded-sm border-gray-700 mr-3"/>
              <img src="../../assets/LogitechPutih.webp" alt="" className="w-5"/>
            </div>
            <div className="flex items-center mt-2">
              <h2 className="font-bold text-gray-800 text-sm mr-20">Koneksi: </h2>
              <p className="font-bold text-xs text-gray-700 p-2 border-[1.5px] rounded-sm border-gray-700 mr-2">Wireless (LIGHTSPEED)</p>
              <p className="font-bold text-xs mr-1 text-gray-600">Wired</p>
            </div>
            <div className="flex items-center mt-2">
              <h2 className="font-bold text-gray-800 text-sm mr-12">Ketersediaan: </h2>
              <p className="font-bold text-xs mr-1 text-green-500">Tersedia</p>
            </div>
            <div className="flex gap-3 mt-4">
                <button className="bg-primary shadow-lg text-sm border-none px-1 py-1.5 flex items-center gap-2 rounded-md text-white font-semibold hover:bg-white hover:text-black border-[1.5px] hover:border-primary duration-300"> <ShoppingCart size="16"/> Mulai Belanja</button>
                <button className="px-1 py-1.5 flex items-center text-sm gap-2 rounded-md text-primary font-semibold hover:bg-white hover:text-black border-[1.5px] border-primary duration-300"><AlertCircle size="16"/> Lihat Detail</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FiturUtama;