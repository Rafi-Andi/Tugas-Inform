import { Minimize } from "react-feather";

const ListProduct = () => {
  return (
    <div className="mt-[100px]">
      <div className="">
        <p className="text-center">
          <span className="text-blue-600 font-bold">~</span> Produk Kami
        </p>
        <h1 className="text-center font-bold mt-2 text-primary text-3xl">
          Koleksi Produk Kami
        </h1>
      </div>
      <div className="flex items-center justify-center mt-4 gap-4">
        <div className="border-solid border-gray-300 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500">
          Mouse
        </div>
        <div className="border-solid border-gray-300 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500">
          Laptop
        </div>
        <div className="border-solid border-gray-300 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500">
          Keyboard
        </div>
        <div className="border-solid border-gray-300 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500">
          Headphone
        </div>
      </div>
      <div className="flex p-10">
        <div>
          <div className="bg-gray-100 px-4 py-9 rounded-2xl relative">
            <img src="../../vite.svg" alt="" width="200px" />
            <div className="bg-primary w-fit px-2 py-1 rounded-2xl absolute top-2 left-2">
                <p className="text-white text-[12px]">50% Off</p>
            </div>
            <div className="bg-white rounded-2xl absolute top-2 right-2 cursor-pointer">
                <p className="p-1 text-sm"><Minimize size="16"/></p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-400">Kategori</p>
            <p>⭐5.0</p>
          </div>
          <p className="font-[600]">Merek produk disini</p>
          <p className="font-[400]">$400.00 <span className="text-gray-400 line-through">$420.00</span></p>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
