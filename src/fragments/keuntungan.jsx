import { Truck, ShoppingCart, Shield, Clock } from "react-feather"


function Keuntungan() {
    const benefits = [
        {
            icon: <Truck size={20} color="#3078d1" />,
            title: "Pengiriman Gratis",
            description: "Pengiriman gratis untuk pesanan di atas Rp 100.000"
        },
        {
            icon: <Shield size={20} color="#3078d1" />,
            title: "Garansi Produk",
            description: "Garansi resmi untuk semua produk original"
        },
        {
            icon: <Clock size={20} color="#3078d1" />,
            title: "Pengiriman Cepat",
            description: "Pengiriman same-day untuk area tertentu"
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 sm:p-8 lg:p-5">
                    <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 flex-1">
                                <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-full shadow-sm">
                                    {benefit.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800 text-sm lg:text-base mb-1">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="lg:hidden space-y-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                                <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-full shadow-sm flex-shrink-0">
                                    {benefit.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-800 text-base mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Keuntungan