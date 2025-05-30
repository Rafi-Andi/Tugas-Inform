export const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="flex flex-col md:flex-row w-11/12 lg:w-full max-w-6xl mx-auto mt-20 py-12 gap-8 md:gap-12 border-b-2 border-gray-200">
            
            <div className="flex flex-col w-full px-6 lg:w-2/3 items-center text-justify lg:items-start lg:text-left">
            <img
            src="../../assets/GameLynx.png"
            alt="GameLynx Logo"
            className="w-32 mb-4"
            />

            <p className="text-gray-600 text-sm leading-relaxed mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi aliquid voluptas maxime nostrum itaque non consequuntur laborum, ducimus excepturi harum! Accusantium qui non iusto sequi dolorum autem beatae corporis?</p>
            
            <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
            {/*SVG Facebook*/}
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400">
            {/*SVG Twitter*/}
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.602-.665 2.525 0 1.847.942 3.479 2.379 4.421-.79-.025-1.533-.242-2.178-.599v.073c0 2.579 1.832 4.729 4.263 5.218-.445.121-.919.186-1.406.186-.343 0-.677-.033-1.003-.095.677 2.109 2.643 3.639 4.973 3.679-1.816 1.423-4.109 2.269-6.605 2.269-.429 0-.852-.025-1.268-.074 2.343 1.499 5.129 2.375 8.12 2.375 9.737 0 15.057-8.065 14.746-15.363.995-.715 1.859-1.611 2.544-2.639z"></path></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500">
            {/*SVG Instagram*/}
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.225-.148-4.771-1.664-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4c2.21 0 4 1.791 4 4s-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700">
            {/*SVG LinkedIn*/}
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.594-11.018-3.714v-2.155z"></path></svg>
            </a>
            </div>

            </div>

            <div className="w-full md:w-auto lg:w-1/4 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-700 mb-5">Cari Produk</h3>
            <ul className="space-y-3">
            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">Mouse</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">Keyboard</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">Laptop</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">Headphone</a></li>
            </ul>
            </div>

            <div className="w-full md:w-auto lg:w-1/4 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-700 mb-5 ">Informasi GameLynx</h3>
            <ul className="space-y-3">
            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">Fitur Utama</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">Produk Terbaik</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">Penawaran Terbatas</a></li>
            </ul>
            </div>

            <div className="w-full md:w-auto lg:w-1/4 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-700 mb-5">Dapatkan Bantuan</h3>
            <ul className="space-y-3">
            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">Tentang Kami</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">Kontak Kami</a></li>
            </ul>
            </div>

            </div>
            <div className="text-center py-6 max-w-6xl mx-auto w-11/12 lg:w-full">
                <p className="text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} GameLynx. All Rights Reserved.
                </p>
            </div>

        </footer>
        
    )
}