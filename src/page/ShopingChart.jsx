import { Trash2 } from "react-feather";
import { useState, useContext } from "react";
import { KeranjangContext } from "../context/keranjangContext";

const Chart = () => {
    const {data, setData} = useContext(KeranjangContext)

    const jumlahProduk = data.map
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-3 p-4 border-solid border-2 rounded-2xl border-gray-100">
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-2">Produk</th>
                <th className="text-left py-3 px-2">Total</th>
                <th className="text-left py-3 px-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
            {data.map((element, index) => (
              <tr key={index} className="border-b-2 border-gray-200">
                <td className="py-4 px-2">
                  <div className="flex items-center gap-4">
                    <img
                      src={element.image}
                      width="100"
                      height="100"
                      alt="Headphone HyperX"
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{element.name}</h3>
                      <p className="text-sm text-gray-700">Jumlah: {element.kuantitas}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span className="font-semibold">{element.priceTotal}</span>
                </td>
                <td className="py-4 px-2">
                  <button
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                    aria-label="Hapus item"
                  >
                    <Trash2 color="black" className="w-5 h-5 text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden">
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-gray-200">
            Keranjang Belanja
          </h2>
          <div className="space-y-4">
            {data.map((element, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src={element.image}
                  width="80"
                  height="80"
                  alt="Headphone HyperX"
                  className="rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base">
                    {element.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Jumlah: {element.kuantitas}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-semibold text-sm sm:text-base">
                      {element.priceTotal}
                    </span>
                    <button
                      className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                      aria-label="Hapus item"
                    >
                      <Trash2 color="black" className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>

      <div className="lg:col-span-2 border-solid border-gray-100 border-2  p-4 rounded-2xl">
        <h3 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h3>
        <div className="space-y-2 text-sm">
          <div>
            <div className="mb-2 p-1 border-solid border-2 border-gray-100 rounded-3xl">
              <input
                type="text"
                name="nama"
                placeholder="Masukkan nama anda"
                className="p-2 outline-none border-none border-transparent"
              />
            </div>
            <div className="p-1 border-solid border-2 border-gray-100 rounded-3xl">
              <input
                type="text"
                name="alamat"
                placeholder="Masukkan alamat anda"
                className="p-2 outline-none border-none border-transparent"
              />
            </div>
            <button className="p-3 border-solid w-full text-primary font-bold  mt-2  border-2 border-primary rounded-3xl">
              <h1>Terapkan</h1>
            </button>
          </div>
          <div className="flex justify-between">
            <span>Jumlah Produk </span>
            <span>10 pcs</span>
          </div>
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>Rp. 2.000.000</span>
          </div>
          <div className="flex justify-between">
            <span>Ongkir</span>
            <span>Rp. 25.000</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold">
            <span>Pemesan</span>
            <span>Rafi andi</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Alamat</span>
            <span>Jl ketegan barat nomer 123 dll lorem20</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>Rp. 1.225.000</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Chart;
