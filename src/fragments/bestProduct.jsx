export const BestProduct = () => {
  return (
    <div className="h-screen bg-white flex items-center px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            The best Product for <br />
            <span>your best time</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat et
            lectus lorem urna, malesuada diam hendrerit.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
            Play Now
          </button>
        </div>

        <div className="relative">
          <div className="bg-[#d9d2ff] rounded-3xl p-8 flex justify-center">
            <img
              src="/images/watch.png"
              alt="Smartwatch"
              className="w-60 md:w-72"
            />
          </div>
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2">
            <span className="text-xl">&lt;</span>
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2">
            <span className="text-xl">&gt;</span>
          </button>
        </div>
      </div>
        
    </div>
  );
};
