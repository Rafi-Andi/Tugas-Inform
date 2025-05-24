import { useState } from "react";

export const PopUpProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => setIsOpen(false);
  const openPopup = () => setIsOpen(true);

  return (
    <div
      id="popup"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
    >
      <div class="bg-white w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl relative max-h-[90vh] overflow-y-auto">
        <button
          onclick="document.getElementById('popup').classList.add('hidden')"
          class="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-black text-lg sm:text-xl p-1"
        >
          ✕
        </button>

        <div class="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
          <img
            src="https://logitech.com/assets/65534/5/mx-master-3s-mouse.png"
            alt="Mouse MX Master 3S"
            class="w-full md:w-1/2 object-contain rounded-xl shadow max-h-64 sm:max-h-80 md:max-h-none"
          />

          <div class="flex-1">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
              MX Master 3S
            </h2>
            <p class="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Mouse ergonomis dengan presisi tinggi dan konektivitas ganda.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6">
              <div>
                <p class="text-gray-500">Sensor</p>
                <p class="font-medium">8000 DPI Darkfield</p>
              </div>
              <div>
                <p class="text-gray-500">Konektivitas</p>
                <p class="font-medium">Bluetooth & Logi Bolt</p>
              </div>
              <div>
                <p class="text-gray-500">Baterai</p>
                <p class="font-medium">70 hari</p>
              </div>
              <div>
                <p class="text-gray-500">Berat</p>
                <p class="font-medium">141 gram</p>
              </div>
              <div class="sm:col-span-2">
                <p class="text-gray-500">Dimensi</p>
                <p class="font-medium">124.9 x 84.3 x 51 mm</p>
              </div>
              <div class="sm:col-span-2">
                <p class="text-gray-500">Fitur</p>
                <p class="font-medium">MagSpeed Scroll, Quiet Clicks</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
              <p class="text-lg sm:text-xl font-bold text-blue-600">
                Rp 1.499.000
              </p>
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow text-sm sm:text-base w-full sm:w-auto">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
