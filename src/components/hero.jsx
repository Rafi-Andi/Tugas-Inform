function Hero(){
    return (
        <div className="">
            <div className="hero-container p-10">
                <div className="flex h-screen w-full items-center grid-cols-2">
                    <div className="w-full hero-kiri">
                        <h1 className="font-bold text-gray-800 text-6xl">Next <span className="text-primary">Gen </span>Tech <span className="text-primary">Accessories</span></h1>
                        <p className="mt-2 text-gray-400 font-md font-semibold text-sm w-100">Aksesoris canggih untuk pengalaman digital tanpa batas.
Dari laptop stand ergonomis hingga headphone berkelas, semua siap dukung produktivitas dan gaya hidupmu.</p>
                        <div className="flex gap-3 mt-2">
                            <button className="bg-primary px-1.5 py-2 rounded-md text-white font-semibold hover:bg-white hover:text-black border-[1.5px] hover:border-primary duration-300">Mulai Belanja</button>
                            <button className="px-1.5 py-2 rounded-md text-primary font-semibold hover:bg-white hover:text-black border-[1.5px] border-primary duration-300">Lihat Detail</button>
                        </div>
                    </div>
                    <div className="w-full hero-kanan">
                        <h1>halo</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero