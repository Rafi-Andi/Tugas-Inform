import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Keuntungan from "../fragments/keuntungan";
import FiturUtama from "../fragments/topFitur";
import { ListProduct } from "../fragments/listProduct";

function HomePage () {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Keuntungan/>
            <FiturUtama/>
            <ListProduct />
        </div>
    )
}

export default HomePage;