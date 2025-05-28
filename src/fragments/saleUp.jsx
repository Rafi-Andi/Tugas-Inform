export const SaleUp = () => {
    return(
    // <div className="h-screen bg-red-600">
        <div className="flex flex-col-reverse lg:flex-row bg-blue-200 w-11/12 lg:w-3/4 mx-auto my-5 rounded-4xl shadow-sm p-8 lg:p-0">
            <div className="w-full lg:w-1/2 text-blue-800 flex flex-col lg:ml-20 lg:my-auto gap-6 items-center lg:items-start text-center lg:text-left">
                <h1 className="text-2xl sm:text-4xl font-extrabold ">Penawaran Hingga 40%!</h1>
                <h2 className="text-xl sm:text-3xl font-bold">Headphone Stereo</h2>
                <button className="mt-3 text-sm font-bold text-gray-300 bg-blue-500 w-fit p-4 rounded-md hover:bg-blue-700 transition">Beli Sekarang</button>
            </div>
            <div className="w-full lg:w-1/2">
                <img src="../../assets/HeroFoto.png" alt="HeadphoneStereo" className="flex w-80 md:w-98 mx-auto items-center justify-center"/>
            </div>
        </div>
    // </div>
    )
}