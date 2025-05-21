const ListProduct = () => {
    return(
        <div className="mt-[100px]">
            <div className="">
            <p className="text-center"><span className="text-blue-600 font-bold">~</span> Produk Kami</p>
            <h1 className="text-center font-bold mt-2 text-primary text-3xl">Koleksi Produk Kami</h1>
            </div>
            <div className="flex items-center justify-center mt-4 gap-4">
                <div className="border-solid border-gray-300 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500">Mouse</div>
                <div className="border-solid border-gray-300 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500">Laptop</div>
                <div className="border-solid border-gray-300 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500">Keyboard</div>
                <div className="border-solid border-gray-300 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500">Headphone</div>
            </div>
            <div className="flex">
                <div className="bg-gray-400 p-4">
                    <img src="../../public/vite.svg" alt="" width="200px"/>
                    <div className="flex ">
                        <p>Mouse</p>
                        <p>⭐5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProduct;