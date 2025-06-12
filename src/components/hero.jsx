import { AlertCircle, Headphones, Shield, ShoppingCart } from "react-feather"

function Hero(){
    return (
        <div className="" id="beranda">
            <div className="hero-container lg:p-10 mt-25 lg:mt-0">
                <div className="grid lg:px-15 px-5 lg:h-screen w-full items-center grid-cols-1 lg:grid-cols-2">
                    <div className="w-full hero-kiri lg:order-1 order-2 mt-6 lg:mt-0">
                        <h1 className="font-bold text-gray-800 text-6xl">Next <span className="text-primary">Gen </span>Tech <span className="text-primary">Accessories</span></h1>
                        <p className="mt-2 text-xs  text-gray-400 font-md font-semibold md:text-sm w-80 lg:w-100">Aksesoris canggih untuk pengalaman digital tanpa batas.
Dari laptop stand ergonomis hingga headphone berkelas, semua siap dukung produktivitas dan gaya hidupmu.</p>
                        <div className="flex gap-3 mt-2">
                            <a href="#produk" className="bg-primary px-1.5 py-2 flex items-center gap-2 rounded-md text-white font-semibold hover:bg-white hover:text-black border-[1.5px] hover:border-primary duration-300"> <ShoppingCart size="16"/> Mulai Belanja</a>
                            <a href="#fiturHeadphone" className="px-1.5 py-2 flex items-center gap-2 rounded-md text-primary font-semibold hover:bg-white hover:text-black border-[1.5px] border-primary duration-300"><AlertCircle size="16"/> Lihat Detail</a>
                        </div>
                        <div className="mt-11 flex lg:gap-4">
                            <div className="flex flex-col items-center lg:flex-row text-center lg:text-justify gap-2">
                                <div className="bg-blue-200 w-fit p-3 py-5 rounded-lg">
                                    <Headphones size="40" color="#3078d1"/>
                                </div>
                                <div className="">
                                    <h2 className="font-bold text-lg mb-2">Aksesoris Premium</h2>
                                    <p className="text-xs text-gray-500">Gadget berkualitas tinggi untuk penggunaan sehari-hari.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center lg:text-justify lg:flex-row gap-2">
                                <div className="bg-green-200 w-fit p-3 py-5 rounded-lg">
                                    <Shield size="40" color="#22C55E"/>
                                </div>
                                <div className="">
                                    <h2 className="font-bold text-lg mb-2">Daya Tahan Lama</h2>
                                    <p className="text-xs text-gray-500">Dibuat dengan bahan pilihan untuk penggunaan jangka panjang.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full hero-kanan relative flex justify-center lg:order-2 order-1">
                        <img src="../../assets/HeroFoto.png" alt="" className="lg:-ml-34"/>
                        <div className="absolute -top-4 left-0 md:top-0 ">
                            <div className="bg-white shadow-2xl w-fit p-2 rounded-[40px]">
                                <div className="flex items-center gap-2 p-5">
                                    <img src="../../assets/logoGameLynx.png" alt="" className="w-10 rounded-[50px] bg-blue-100 p-1"/>
                                    <div className="flex flex-col">
                                        <h1 className="text-sm font-bold text-gray-800">PRO X WIRELESS Logitech</h1>
                                        <h1 className="text-sm font-md text-gray-400">Mouse berkualitas Logitech</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 lg:right-25 lg:bottom-10 ">
                            <div className="bg-white shadow-lg w-50 p-2 rounded-lg">
                                <div className="flex">
                                    <img src="https://i.pravatar.cc/150?img=5" alt="" className="w-10 rounded-[50px]"/>
                                    <div className="flex flex-col">
                                        <h1 className="text-sm font-semibold text-gray-800">Anisa Putri</h1>
                                        <p className="text-xs">⭐⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="text-xs text-gray-700 leading-3.5">Beli mouse wireless buat kerja, eh dipakai nge-game malah jempolan! Akurat, responsif, dan nyaman banget.</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-100 absolute right-4 top-15 hidden lg:block">
                            <div className="flex flex-col">
                                <div className="  p-2">
                                    <img src="../../assets/posterProduct/headphoneLogitech.png" alt="" className="w-18 rounded-md"/>
                                    <h2 className="text-[10px] font-bold text-gray-800 -mb-0.5">MX Logitech</h2>
                                    <p className="text-[8px] font-semibold text-gray-600">Rp. 2.072.000</p>
                                </div>
                                <div className="  p-2">
                                    <img src="../../assets/posterProduct/keyboardKeychron.png" alt="" className="w-18 rounded-md"/>
                                      <h2 className="text-[10px] font-bold text-gray-800 -mb-0.5">Keychron K8 HE</h2>
                                    <p className="text-[8px] font-semibold text-gray-600">Rp. 1.610.000</p>
                                </div>
                                <div className="  p-2">
                                    <img src="../../assets/posterProduct/laptopMSI.png" alt="" className="w-18 rounded-md"/>
                                      <h2 className="text-[10px] font-bold text-gray-800 -mb-0.5">Sword 16 HX</h2>
                                    <p className="text-[8px] font-semibold text-gray-600">Rp. 17.425.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero