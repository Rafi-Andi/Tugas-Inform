export const SaleUp = () => {
    return(
    // <div className="h-screen bg-red-600">
        <div className="flex flex-col-reverse lg:flex-row bg-gradient-to-r from-white to-blue-200 w-11/12 mx-auto my-5 rounded-2xl   p-8 lg:p-0 lg:pb-2" id="diskon">
            <div className="w-full lg:w-1/2 text-primary flex flex-col lg:ml-20 lg:my-auto items-center lg:items-start text-center lg:text-left">
                
              <div className="mb-2 md:mb-3 self-center lg:self-start">
              <span className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow">
              PENAWARAN TERBATAS
              </span>
              </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold mb-8">Diskon <span className="text-pink-500">40%!</span></h1>
                <h2 className="text-xl sm:text-3xl font-bold">Headphone Stereo</h2>
                <p className="text-sm lg:text-base text-gray-600 mt-3 mb-4">Kualitas Premium<span className="text-gray-400 mx-1">•</span> Audio Jernih <span className="text-gray-400 mx-1">•</span> Kenyamanan Maksimal</p>
                
                <div className="flex flex-row gap-10 mt-4">
                <button className="flex mt-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-400 w-fit p-4 rounded-lg hover:from-blue-500 to-blue-800 transition">Beli Sekarang<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></button>
                <button className="mt-3 text-sm font-semibold text-blue-700 bg-white w-fit p-4 border-2 border-blue-700 rounded-lg hover:bg-gray-300 transition">Lihat Detail</button>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 mt-8 pt-4 border-t border-gray-300 w-full">
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                {/*SVG bintang*/}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                4.9/5 Rating
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                {/*SVG centang*/}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Garansi 2 Tahun
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                {/*SVG kardus*/}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-amber-700"><path d="M3.75 3A1.75 1.75 0 002 4.75v10.5A1.75 1.75 0 003.75 17h12.5A1.75 1.75 0 0018 15.25V4.75A1.75 1.75 0 0016.25 3H3.75zM9.25 7.25a.75.75 0 01.75-.75h3.25a.75.75 0 010 1.5H10a.75.75 0 01-.75-.75zM6.5 9.25a.75.75 0 000 1.5h.25V12a.75.75 0 001.5 0v-1.25h2.5V12a.75.75 0 001.5 0v-1.25h.25a.75.75 0 000-1.5h-7.5z" /></svg>
                Gratis Ongkir
                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 items-center justify-center relative">
                <img src="../../assets/HeroFoto.png" alt="HeadphoneStereo" className="flex w-80 md:w-98 mx-auto"/>
              <div className="absolute -top-6 -right-6 md:top-4 md:right-4 bg-green-500 text-white p-2 sm:p-3 rounded-4xl shadow-lg text-center">
                <div className="text-xs sm:text-sm line-through text-green-200">Rp 1.000.000</div>
                <div className="text-base sm:text-lg font-bold">Rp 600.000</div>
              </div>
            </div>
        </div>
    // </div>
    )
}