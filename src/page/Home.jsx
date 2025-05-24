import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Keuntungan from "../fragments/keuntungan";
import FiturUtama from "../fragments/topFitur";
import { ListProduct } from "../fragments/listProduct";
import { PopUpProduct } from "../components/popup";

function HomePage () {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Keuntungan/>
            <FiturUtama/>
            <ListProduct />
            {/* <PopUpProduct /> */}
        </div>
    )
}

export default HomePage;