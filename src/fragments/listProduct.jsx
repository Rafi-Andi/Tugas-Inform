import { Minimize, ShoppingCart } from "react-feather";
import { displayHeadphone, displayKeyboard, displayLaptop, displayMouse } from "../utils/product";
import { useState, useEffect } from "react";

const ListProductCard = (data) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className=" max-w-[250px]">
            <div className=" rounded-2xl relative flex flex-col justify-center items-center">
              <img
                className="rounded-3xl"
                src={item.image}
                alt=""
                width="250px"
              />
              <div className="bg-primary w-fit px-2 py-1 rounded-2xl absolute top-2 left-2">
                <p className="text-white text-[12px]">{item.diskon}</p>
              </div>
              <div className="bg-white rounded-2xl absolute top-2 right-2 cursor-pointer shadow-2xl">
                <p className="p-1 text-sm">
                  <Minimize size="16" />
                </p>
              </div>
            </div>

            <div className="flex justify-between ">
              <p className="text-gray-400">{item.kategori}</p>
              <p>⭐5.0</p>
            </div>
            <p className="font-[600] line-clamp-2 my-3 min-h-[3rem]">{item.name}</p>
            <div className="flex gap-2">
              <p className="font-[500]">{item.hargaDiskon}</p>
              <p className="text-gray-400 line-through">{item.hargaAsli}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};


export const ListProduct = () => {
  
  const [activeProduct, setActiveProduct] = useState('mouse')

  const renderCard = () => {
    switch(activeProduct){
      case 'mouse':
        return ListProductCard(displayMouse);
      case 'laptop':
        return ListProductCard(displayLaptop);
      case 'keyboard':
        return ListProductCard(displayKeyboard);
      case 'headphone':
        return ListProductCard(displayHeadphone);
    }
  }

  return (
    <div className="mt-[100px]">
      <div className="">
        <div className="flex justify-center">
          <p className="flex items-center gap-1 bg-primary p-1 py-1.5 text-xs rounded-sm font-semibold w-fit text-white">
            <ShoppingCart size="14" /> Produk Kami
          </p>
        </div>
        <h1 className="text-center font-bold mt-1 text-primary text-3xl">
          Koleksi Produk Kami
        </h1>
      </div>
      <div className="flex items-center justify-center mt-4 gap-1 md:gap-4">
        <div onClick={() => setActiveProduct('mouse')} className={` ${activeProduct == 'mouse' ? 'bg-primary text-white' : 'text-gray-300'} border-solid border-gray-300 text-gray-700 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500`}>
          Mouse
        </div>
        <div onClick={() => setActiveProduct('laptop')} className={` ${activeProduct == 'laptop' ? 'bg-primary text-white' : 'text-gray-300'} border-solid border-gray-300 text-gray-700 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500`}>
          Laptop
        </div>
        <div onClick={() => setActiveProduct('keyboard')} className={` ${activeProduct == 'keyboard' ? 'bg-primary text-white' : 'text-gray-300'} border-solid border-gray-300 text-gray-700 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500`}>
          Keyboard
        </div>
        <div onClick={() => setActiveProduct('headphone')} className={` ${activeProduct == 'headphone' ? 'bg-primary text-white' : 'text-gray-300'} border-solid border-gray-300 text-gray-700 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500`}>
          Headphone
        </div>
      </div>
      <div className="flex p-10 gap-8 flex-wrap justify-center">
          {renderCard()}
      </div>
    </div>
  );
};
