import Hero from "../components/hero";
import Navbar from "../components/navbar";
import ListProduct from "./listProduct";

function HomePage () {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <ListProduct />
        </div>
    )
}

export default HomePage;