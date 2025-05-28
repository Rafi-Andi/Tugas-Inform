import { Minimize, ShoppingCart } from "react-feather";
import {
  displayHeadphone,
  displayKeyboard,
  displayLaptop,
  displayMouse,
} from "../utils/product";
import { useState, useEffect } from "react";

const ListProductCardMouse = () => {
  const [popup, setPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [kuantitas, setKuantitas] = useState(1);

  const formatToRupiah = (angka) => {
    if (typeof angka !== "number") return "Rp 0";
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const priceNow = (price, amount) => {
    const priceUpdate = price * amount;
    console.log(priceUpdate);
    return priceUpdate;
  };

  return (
    <>
      {popup && (
        <div
          id="popup"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
        >
          <div className="bg-white w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPopUp(false)}
              className="cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-black text-lg sm:text-xl p-1"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
              <img
                src={selectedItem.image}
                alt="Mouse MX Master 3S"
                className="w-full md:w-1/2 object-contain rounded-xl shadow max-h-64 sm:max-h-80 md:max-h-none"
              />

              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                  {selectedItem.name}
                </h2>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Mouse ergonomis dengan presisi tinggi dan konektivitas ganda.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6">
                  <div>
                    <p className="text-gray-500">Dimensi</p>
                    <p className="font-medium">{`${selectedItem.spesifikasi.dimensi.panjang} x ${selectedItem.spesifikasi.dimensi.lebar} x ${selectedItem.spesifikasi.dimensi.tinggi}, ${selectedItem.spesifikasi.dimensi.berat}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Konektivitas</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.konektivitas[0]}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Sensor</p>
                    <p className="font-medium">{`Tipe ${selectedItem.spesifikasi.sensor.tipe} DPI ${selectedItem.spesifikasi.sensor.dpi}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Rangka</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.material.rangka}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-gray-500">Tombol</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.material.tombol}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-gray-500">Fitur</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.fiturTambahan[0]}
                    </p>
                  </div>
                </div>

                <div className="flex mb-5 items-center gap-[1rem]">
                  <h2 className="">Kuantitas</h2>
                  <div className="flex gap-[.5rem]">
                    <button
                      onClick={() => {
                        if (kuantitas > 1) {
                          return setKuantitas(
                            (prevKuantitas) => prevKuantitas - 1
                          );
                        }
                      }}
                      className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4"
                    >
                      -
                    </button>
                    <div className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4">
                      {kuantitas}
                    </div>
                    <div
                      onClick={() =>
                        setKuantitas((prevKuantitas) => prevKuantitas + 1)
                      }
                      className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4"
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                  <p className="text-lg sm:text-xl font-bold text-blue-600">
                    {formatToRupiah(
                      priceNow(selectedItem.hargaDiskon, kuantitas)
                    )}
                  </p>
                </div>
                <div className="flex gap-2 mt-5">
                  <a
                    href={`https://wa.me/62895347193482?text=permisi, saya ingin membeli barang dengan nama produk ${selectedItem.name} kategori ${selectedItem.kategori}`}
                  >
                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow text-sm sm:text-base w-full sm:w-auto">
                      Pesan Sekarang
                    </button>
                  </a>
                  <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow text-sm sm:text-base w-full sm:w-auto">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayMouse.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setPopUp(true);
              setSelectedItem(item);
              console.log(`ini item dengan nama ${item.name}`);
            }}
            className="cursor-pointer max-w-[250px]"
          >
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
            <p className="font-[600] line-clamp-2 my-3 min-h-[3rem]">
              {item.name}
            </p>
            <div className="flex gap-2">
              <p className="font-[500]">{formatToRupiah(item.hargaDiskon)} </p>
              <p className="text-gray-400 line-through">
                {formatToRupiah(item.hargaAsli)}{" "}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ListProductCardLaptop = () => {
  const [popup, setPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [kuantitas, setKuantitas] = useState(1);

  const formatToRupiah = (angka) => {
    if (typeof angka !== "number") return "Rp 0";
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const priceNow = (price, amount) => {
    const priceUpdate = price * amount;
    console.log(priceUpdate);
    return priceUpdate;
  };

  return (
    <>
      {popup && (
        <div
          id="popup"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
        >
          <div className="bg-white w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPopUp(false)}
              className="cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-black text-lg sm:text-xl p-1"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
              <img
                src={selectedItem.image}
                alt="Mouse MX Master 3S"
                className="w-full md:w-1/2 object-contain rounded-xl shadow max-h-64 sm:max-h-80 md:max-h-none"
              />

              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                  {selectedItem.name}
                </h2>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Laptop ringkas dengan performa tinggi, ideal untuk
                  multitasking dan mobilitas sehari-hari.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6">
                  <div>
                    <p className="text-gray-500">Dimensi</p>
                    <p className="font-medium">{`${selectedItem.spesifikasi.dimensi.panjang} x ${selectedItem.spesifikasi.dimensi.lebar} x ${selectedItem.spesifikasi.dimensi.tinggi}, ${selectedItem.spesifikasi.dimensi.berat}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Konektivitas</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.konektivitas[0]}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Prosesor</p>
                    <p className="font-medium">{`Tipe ${selectedItem.spesifikasi.prosesor}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Grafis</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.grafis}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-gray-500">Memori</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.memori}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-gray-500">Fitur</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.fitur[0]}
                    </p>
                  </div>
                </div>

                <div className="flex mb-5 items-center gap-[1rem]">
                  <h2 className="">Kuantitas</h2>
                  <div className="flex gap-[.5rem]">
                    <button
                      onClick={() => {
                        if (kuantitas > 1) {
                          return setKuantitas(
                            (prevKuantitas) => prevKuantitas - 1
                          );
                        }
                      }}
                      className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4"
                    >
                      -
                    </button>
                    <div className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4">
                      {kuantitas}
                    </div>
                    <div
                      onClick={() =>
                        setKuantitas((prevKuantitas) => prevKuantitas + 1)
                      }
                      className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4"
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                  <p className="text-lg sm:text-xl font-bold text-blue-600">
                    {formatToRupiah(
                      priceNow(selectedItem.hargaDiskon, kuantitas)
                    )}
                  </p>
                </div>
                <div className="flex gap-2 mt-5">
                  <a
                    href={`https://wa.me/62895347193482?text=permisi, saya ingin membeli barang dengan nama produk ${selectedItem.name} kategori ${selectedItem.kategori}`}
                  >
                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow text-sm sm:text-base w-full sm:w-auto">
                      Pesan Sekarang
                    </button>
                  </a>
                  <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow text-sm sm:text-base w-full sm:w-auto">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayLaptop.map((item, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer max-w-[250px]"
            onClick={() => {
              setPopUp(true);
              setSelectedItem(item);
              console.log(`ini item dengan nama ${item.name}`);
            }}
          >
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
            <p className="font-[600] line-clamp-2 my-3 min-h-[3rem]">
              {item.name}
            </p>
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

const ListProductCardKeyboard = () => {
  const [popup, setPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [kuantitas, setKuantitas] = useState(1);

  const formatToRupiah = (angka) => {
    if (typeof angka !== "number") return "Rp 0";
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const priceNow = (price, amount) => {
    const priceUpdate = price * amount;
    console.log(priceUpdate);
    return priceUpdate;
  };
  return (
    <>
      {popup && (
        <div
          id="popup"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
        >
          <div className="bg-white w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPopUp(false)}
              className="cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-black text-lg sm:text-xl p-1"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
              <img
                src={selectedItem.image}
                alt="Mouse MX Master 3S"
                className="w-full md:w-1/2 object-contain rounded-xl shadow max-h-64 sm:max-h-80 md:max-h-none"
              />

              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                  {selectedItem.name}
                </h2>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Keyboard mekanikal responsif dengan desain ergonomis dan
                  pengalaman mengetik yang nyaman.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6">
                  <div>
                    <p className="text-gray-500">Dimensi</p>
                    <p className="font-medium">{`${selectedItem.spesifikasi.dimensi.panjang} x ${selectedItem.spesifikasi.dimensi.lebar} x ${selectedItem.spesifikasi.dimensi.tinggi}, ${selectedItem.spesifikasi.dimensi.berat}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Konektivitas</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.konektivitas[0]}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Material</p>
                    <p className="font-medium">{`Rangka : ${selectedItem.spesifikasi.material.rangka} Keycaps : ${selectedItem.spesifikasi.material.keycaps}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Switch</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.switch[0]}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Fitur</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.fitur[0]}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Fitur Tambahan</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.fitur[1]}
                    </p>
                  </div>
                </div>

                 <div className="flex mb-5 items-center gap-[1rem]">
                  <h2 className="">Kuantitas</h2>
                  <div className="flex gap-[.5rem]">
                    <button
                      onClick={() => {
                        if (kuantitas > 1) {
                          return setKuantitas(
                            (prevKuantitas) => prevKuantitas - 1
                          );
                        }
                      }}
                      className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4"
                    >
                      -
                    </button>
                    <div className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4">
                      {kuantitas}
                    </div>
                    <div
                      onClick={() =>
                        setKuantitas((prevKuantitas) => prevKuantitas + 1)
                      }
                      className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4"
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                  <p className="text-lg sm:text-xl font-bold text-blue-600">
                    {formatToRupiah(
                      priceNow(selectedItem.hargaDiskon, kuantitas)
                    )}
                  </p>
                </div>
                <div className="flex gap-2 mt-5">
                  <a
                    href={`https://wa.me/62895347193482?text=permisi, saya ingin membeli barang dengan nama produk ${selectedItem.name} kategori ${selectedItem.kategori}`}
                  >
                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow text-sm sm:text-base w-full sm:w-auto">
                      Pesan Sekarang
                    </button>
                  </a>
                  <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow text-sm sm:text-base w-full sm:w-auto">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayKeyboard.map((item, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer max-w-[250px]"
            onClick={() => {
              setPopUp(true);
              setSelectedItem(item);
            }}
          >
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
            <p className="font-[600] line-clamp-2 my-3 min-h-[3rem]">
              {item.name}
            </p>
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

const ListProductCardHeadphone = () => {
  const [popup, setPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [kuantitas, setKuantitas] = useState(1);

  const formatToRupiah = (angka) => {
    if (typeof angka !== "number") return "Rp 0";
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const priceNow = (price, amount) => {
    const priceUpdate = price * amount;
    console.log(priceUpdate);
    return priceUpdate;
  };

  return (
    <>
      {popup && (
        <div
          id="popup"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
        >
          <div className="bg-white w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPopUp(false)}
              className="cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-black text-lg sm:text-xl p-1"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
              <img
                src={selectedItem.image}
                alt="Mouse MX Master 3S"
                className="w-full md:w-1/2 object-contain rounded-xl shadow max-h-64 sm:max-h-80 md:max-h-none"
              />

              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                  {selectedItem.name}
                </h2>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Headphone berkualitas tinggi dengan suara jernih dan peredam
                  bising untuk pengalaman audio maksimal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6">
                  <div>
                    <p className="text-gray-500">Dimensi</p>
                    <p className="font-medium">{`lebar ${selectedItem.spesifikasi.dimensi.lebar} x tinggi ${selectedItem.spesifikasi.dimensi.tinggi} x ${selectedItem.spesifikasi.dimensi.tinggi}, ${selectedItem.spesifikasi.dimensi.berat}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Konektivitas</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.konektivitas[0]}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Bantalan</p>
                    <p className="font-medium">{`${selectedItem.spesifikasi.material.bantalanTelinga}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Driver Tipe</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.driver.tipe}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Mikrofon Tipe</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.mikrofon.tipe}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Fitur Tambahan</p>
                    <p className="font-medium">
                      {selectedItem.spesifikasi.fiturTambahan[1]}
                    </p>
                  </div>
                </div>

                 <div className="flex mb-5 items-center gap-[1rem]">
                  <h2 className="">Kuantitas</h2>
                  <div className="flex gap-[.5rem]">
                    <button
                      onClick={() => {
                        if (kuantitas > 1) {
                          return setKuantitas(
                            (prevKuantitas) => prevKuantitas - 1
                          );
                        }
                      }}
                      className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4"
                    >
                      -
                    </button>
                    <div className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4">
                      {kuantitas}
                    </div>
                    <div
                      onClick={() =>
                        setKuantitas((prevKuantitas) => prevKuantitas + 1)
                      }
                      className="border-solid cursor-pointer border-gray-300 border-[1px] py-1 px-4"
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                  <p className="text-lg sm:text-xl font-bold text-blue-600">
                    {formatToRupiah(
                      priceNow(selectedItem.hargaDiskon, kuantitas)
                    )}
                  </p>
                </div>
                <div className="flex gap-2 mt-5">
                  <a
                    href={`https://wa.me/62895347193482?text=permisi, saya ingin membeli barang dengan nama produk ${selectedItem.name} kategori ${selectedItem.kategori}`}
                  >
                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow text-sm sm:text-base w-full sm:w-auto">
                      Pesan Sekarang
                    </button>
                  </a>
                  <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow text-sm sm:text-base w-full sm:w-auto">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {displayHeadphone.map((item, index) => {
        return (
          <div
            onClick={() => {
              setPopUp(true);
              setSelectedItem(item);
            }}
            key={index}
            className="cursor-pointer max-w-[250px]"
          >
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
            <p className="font-[600] line-clamp-2 my-3 min-h-[3rem]">
              {item.name}
            </p>
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
  const [activeProduct, setActiveProduct] = useState("mouse");

  const renderCard = () => {
    switch (activeProduct) {
      case "mouse":
        return <ListProductCardMouse />;
      case "laptop":
        return <ListProductCardLaptop />;
      case "keyboard":
        return <ListProductCardKeyboard />;
      case "headphone":
        return <ListProductCardHeadphone />;
    }
  };

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
        <div
          onClick={() => setActiveProduct("mouse")}
          className={` ${
            activeProduct == "mouse" ? "bg-primary text-white" : "text-gray-300"
          } border-solid border-gray-300 text-gray-700 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500`}
        >
          Mouse
        </div>
        <div
          onClick={() => setActiveProduct("laptop")}
          className={` ${
            activeProduct == "laptop"
              ? "bg-primary text-white"
              : "text-gray-300"
          } border-solid border-gray-300 text-gray-700 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500`}
        >
          Laptop
        </div>
        <div
          onClick={() => setActiveProduct("keyboard")}
          className={` ${
            activeProduct == "keyboard"
              ? "bg-primary text-white"
              : "text-gray-300"
          } border-solid border-gray-300 text-gray-700 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500`}
        >
          Keyboard
        </div>
        <div
          onClick={() => setActiveProduct("headphone")}
          className={` ${
            activeProduct == "headphone"
              ? "bg-primary text-white"
              : "text-gray-300"
          } border-solid border-gray-300 text-gray-700 border-[1px] px-3 py-1 rounded-2xl hover:bg-primary cursor-pointer hover:text-white transition-all duration-500`}
        >
          Headphone
        </div>
      </div>
      <div className="flex p-10 gap-8 flex-wrap justify-center">
        {renderCard()}
      </div>
    </div>
  );
};
