import { Filter, Trash2 } from "react-feather";
import { useState, useContext, useRef, useEffect } from "react";
import { KeranjangContext } from "../context/keranjangContext";

const Chart = () => {
  const { data, setData } = useContext(KeranjangContext);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");

  const namaRef = useRef(null);
  const alamatRef = useRef(null);

  const formatToRupiah = (angka) => {
    if (typeof angka !== "number") return "Rp 0";
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  const handleTerapkan = () => {
    setNama(namaRef.current.value);
    setAlamat(alamatRef.current.value);
  };

  const totalKuantitas = () => {
    return data.reduce((total, product) => total + product.kuantitas, 0);
  };

  const deleteCart = (id) => {
    setData(data.filter((product) => product.id !== id));
  };

  const subTotal = () => {
    return data.reduce((total, product) => total + product.priceTotal, 0);
  };

  const generatePesanKeranjang = (data, nama, alamat) => {
    let pesan = `🛍️ *Pesanan Baru*\n\n`;

    data.forEach((item, index) => {
      pesan += `🛒 ${index + 1}. *${item.name}*\n`;
      pesan += `🔢 Jumlah: ${item.kuantitas}\n`;
      pesan += `💵 Total: ${formatToRupiah(item.priceTotal)}\n\n`;
    });

    const totalProduk = totalKuantitas();
    const totalHarga = subTotal();
    const ongkir = 25000;
    const grandTotal = totalHarga + ongkir;

    pesan += `📦 *Ringkasan Pesanan*\n`;
    pesan += `🧮 Total Produk: *${totalProduk} pcs*\n`;
    pesan += `💰 Subtotal: *${formatToRupiah(totalHarga)}*\n`;
    pesan += `🚚 Ongkir: *${formatToRupiah(ongkir)}*\n`;
    pesan += `🟩 Total Bayar: *${formatToRupiah(grandTotal)}*\n\n`;

    pesan += `🙋 *Data Pemesan*\n`;
    pesan += `👤 Nama: *${nama}*\n`;
    pesan += `🏡 Alamat: *${alamat}*\n\n`;

    pesan += `🙏 Terima kasih! Mohon diproses ya Kak.`;

    return encodeURIComponent(pesan);
  };

  const pesan = generatePesanKeranjang(data, nama, alamat);

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
                        <p className="text-sm text-gray-700">
                          Jumlah: {element.kuantitas}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <span className="font-semibold">
                      {formatToRupiah(element.priceTotal)}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <button
                      className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                      aria-label="Hapus item"
                      onClick={() => deleteCart(element.id)}
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
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
              >
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
                        {formatToRupiah(element.priceTotal)}
                      </span>
                      <button
                        className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                        aria-label="Hapus item"
                        onClick={() => deleteCart(element.id)}
                      >
                        <Trash2
                          color="black"
                          className="w-4 h-4 text-red-600"
                        />
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
                ref={namaRef}
                type="text"
                name="nama"
                placeholder="Masukkan nama anda"
                className="p-2 outline-none border-none border-transparent"
              />
            </div>
            <div className="p-1 border-solid border-2 border-gray-100 rounded-3xl">
              <input
                ref={alamatRef}
                type="text"
                name="alamat"
                placeholder="Masukkan alamat anda"
                className="p-2 outline-none border-none border-transparent"
              />
            </div>
            <button
              onClick={() => handleTerapkan()}
              className="p-3 border-solid w-full text-primary font-bold  mt-2  border-2 border-primary rounded-3xl"
            >
              <h1>Terapkan</h1>
            </button>
          </div>
          <div className="flex justify-between">
            <span>Jumlah Produk </span>
            <span>{totalKuantitas()} pcs</span>
          </div>
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>{formatToRupiah(subTotal())}</span>
          </div>
          <div className="flex justify-between">
            <span>Ongkir</span>
            <span>Rp. 25.000</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold">
            <span>Pemesan</span>
            <span>{nama}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Alamat</span>
            <span>{alamat}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatToRupiah(subTotal() + 25000)}</span>
          </div>
        </div>
        <a
          href={
            nama && alamat ? `https://wa.me/62895347193482?text=${pesan}` : "#"
          }
          onClick={(e) => {
            if (!nama || !alamat) {
              e.preventDefault();
              alert("Mohon isi nama dan alamat terlebih dahulu!");
            }
          }}
        >
          <button
            className={`w-full mt-4 py-2 px-4 rounded-lg transition-colors font-semibold ${
              nama && alamat
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!nama || !alamat}
          >
            Checkout
          </button>
        </a>
      </div>
    </div>
  );
};

export default Chart;
