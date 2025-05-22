import { Info, Phone, ShoppingCart } from "react-feather";

function Navbar(){
    return (
        <div className="">
            <div className="navbar bg-white z-50 w-full fixed right-0 top-0 flex items-center px-8 py-4 justify-between">
                <div className="nav-judul">
                    <img src="../../assets/GameLynx.png" alt="" className="w-30"/>
                </div>
                <div className="">
                    <ul className="flex gap-4 text-sm">
                        <li className="font-semibold text-primary"><a href="">Beranda</a></li>
                        <li className="hover:text-primary duration-300"><a href="">Tentang</a></li>
                        <li className="hover:text-primary duration-300"><a href="">Produk</a></li>
                        <li className="hover:text-primary duration-300"><a href="">Toko</a></li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center justify-center bg-gray-200 p-3 rounded-[50px]">
                        <Phone size="20px" color="#3078d1"/>
                    </div>
                    <div className="flex items-center justify-center bg-gray-200 p-3 rounded-[50px]">
                        <ShoppingCart size="20px" color="#3078d1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;