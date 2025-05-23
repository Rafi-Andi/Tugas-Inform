import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Keuntungan from "../fragments/keuntungan";
import ListProduct from "./listProduct";

function HomePage () {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Keuntungan/>
            <ListProduct />
        </div>
    )
}

export default HomePage;