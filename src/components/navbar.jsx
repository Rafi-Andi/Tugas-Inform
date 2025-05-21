function Navbar(){
    return (
        <div className="">
            <div className="navbar w-full fixed right-0 top-0 flex items-center p-8 justify-between">
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
                <button className="bg-primary p-2 text-white font-semibold hover:bg-white hover:text-black border-[1.5px] hover:border-primary duration-300">Kontak Kami</button>
            </div>
        </div>
    )
}

export default Navbar;