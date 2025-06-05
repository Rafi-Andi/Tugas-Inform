import { useEffect, useState, useContext } from "react";
import { Phone, ShoppingCart, Menu, X } from "react-feather";
import { KeranjangContext } from "../context/keranjangContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data, setData } = useContext(KeranjangContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`z-40 navbar fixed top-0  right-0 left-0 transition-all duration-300 px-[30px] py-[15px] ${
        scrolling ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="container-navbar flex justify-between items-center">
        <a href="#beranda"><div className="nav-logo flex items-center gap-2">
          <img
            src="../../assets/GameLynx.png"
            alt="GameLynx Logo"
            className="w-30"
          />
        </div>
        </a>

        <div className="navbar-nav md:block z-10">
          <ul
            className={`transition-all duration-300 z-40 flex gap-6 lg:gap-10 absolute flex-col right-0 ${
              isOpen
                ? "top-[50px] right-0 opacity-100"
                : "top-[69px] right-[-900px] opacity-0"
            } shadow-lg px-10 py-5 bg-white rounded-b-2xl w-[250px] h-screen md:h-auto md:static md:flex-row md:w-auto md:top-0 md:py-0 md:px-0 md:bg-transparent text-black md:opacity-100 md:shadow-none`}
          >
            <li>
              <a
                href="#beranda"
                onClick={closeMenu}
                className="text-[16px] font-[500] hover:text-primary transition-colors"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#produk"
                onClick={closeMenu}
                className="text-[16px] font-[500] hover:text-primary transition-colors"
              >
                Produk
              </a>
            </li>
            <li>
              <a
                href="#testimoni"
                onClick={closeMenu}
                className="text-[16px] font-[500] hover:text-primary transition-colors"
              >
                Testimoni
              </a>
            </li>
            <li>
              <a
                href="#diskon"
                onClick={closeMenu}
                className="text-[16px] font-[500] hover:text-primary transition-colors"
              >
                Diskon
              </a>
            </li>
             <li>
              <a
                href="#"
                onClick={closeMenu}
                className="text-[16px] font-[500] hover:text-primary transition-colors"
              >
                Kontak
              </a>
            </li>

            <div className="button md:hidden flex flex-col gap-3 mt-4">
              <button className="cursor-pointer flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors w-full">
                <Phone size="16px" />
                Kontak
              </button>
              <Link to="/chart" className="relative flex items-center justify-center gap-2 bg-white text-primary border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors w-full">
                <div className="relative">
                  <ShoppingCart size="16px" />
                </div>
                Keranjang
                <div className="absolute -top-1 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {data.length}
                </div>
              </Link>
            </div>
          </ul>
        </div>

        <div className="navbar-button flex items-center gap-[15px]">
          <div className="button hidden md:flex gap-2">
            <button className="flex items-center justify-center bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors">
              <Phone size="20px" color="#3078d1" />
            </button>
            <Link to='/chart' className="relative flex items-center justify-center bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors">
              <ShoppingCart size="20px" color="#3078d1" />
              <div className="absolute -top-1 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
                {data.length}
              </div>
            </Link>
          </div>

          <div
            className="menu-button cursor-pointer block md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="text-gray-800" size="24px" />
            ) : (
              <Menu className="text-gray-800" size="24px" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
