import { AlertCircle, Headphones, Shield, ShoppingCart } from "react-feather"

function Hero(){
    return (
        <div className="">
            <div className="hero-container p-10">
                <div className="flex px-15 h-screen w-full items-center grid-cols-1 lg:grid-cols-2">
                    <div className="w-full hero-kiri">
                        <h1 className="font-bold text-gray-800 text-6xl">Next <span className="text-primary">Gen </span>Tech <span className="text-primary">Accessories</span></h1>
                        <p className="mt-2 text-gray-400 font-md font-semibold text-sm w-100">Aksesoris canggih untuk pengalaman digital tanpa batas.
Dari laptop stand ergonomis hingga headphone berkelas, semua siap dukung produktivitas dan gaya hidupmu.</p>
                        <div className="flex gap-3 mt-2">
                            <button className="bg-primary px-1.5 py-2 flex items-center gap-2 rounded-md text-white font-semibold hover:bg-white hover:text-black border-[1.5px] hover:border-primary duration-300"> <ShoppingCart size="16"/> Mulai Belanja</button>
                            <button className="px-1.5 py-2 flex items-center gap-2 rounded-md text-primary font-semibold hover:bg-white hover:text-black border-[1.5px] border-primary duration-300"><AlertCircle size="16"/> Lihat Detail</button>
                        </div>
                        <div className="mt-11 flex ">
                            <div className="flex gap-2">
                                <div className="bg-blue-200 w-fit p-3 py-5 rounded-lg">
                                    <Headphones size="40" color="#3078d1"/>
                                </div>
                                <div className="">
                                    <h2 className="font-bold text-lg mb-2">Aksesoris Premium</h2>
                                    <p className="text-xs text-gray-500">Gadget berkualitas tinggi untuk penggunaan sehari-hari.</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
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
                    <div className="w-full hero-kanan relative ">
                        <img src="../../assets/headphoneLogitech.webp" alt="" className="-ml-18"/>
                        <div className="absolute right-25 bottom-10">
                            <div className="bg-white shadow-lg w-50 p-2 rounded-lg">
                                <div className="flex">
                                    <img src="../../assets/avatar.avif" alt="" className="w-10 rounded-[50px]"/>
                                    <div className="flex flex-col">
                                        <h1 className="text-sm font-semibold text-gray-800">Randi Permana</h1>
                                        <p className="text-xs">⭐⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="text-xs text-gray-700 leading-3.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-100 absolute right-4 top-15">
                            <div className="flex flex-col">
                                <div className=" bg-white p-2">
                                    <img src="../../assets/cobafoto.png" alt="" className="w-18 rounded-md"/>
                                    <h2 className="text-[10px] font-bold text-gray-800 -mb-0.5">MX Logitech</h2>
                                    <p className="text-[8px] font-semibold text-gray-600">$200.000</p>
                                </div>
                                <div className=" bg-white p-2">
                                    <img src="../../assets/cobafoto.png" alt="" className="w-18 rounded-md"/>
                                      <h2 className="text-[10px] font-bold text-gray-800 -mb-0.5">MX Logitech</h2>
                                    <p className="text-[8px] font-semibold text-gray-600">$200.000</p>
                                </div>
                                <div className=" bg-white p-2">
                                    <img src="../../assets/cobafoto.png" alt="" className="w-18 rounded-md"/>
                                      <h2 className="text-[10px] font-bold text-gray-800 -mb-0.5">MX Logitech</h2>
                                    <p className="text-[8px] font-semibold text-gray-600">$200.000</p>
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