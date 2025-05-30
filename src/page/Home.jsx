import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Keuntungan from "../fragments/keuntungan";
import FiturUtama from "../fragments/topFitur";
import { ListProduct } from "../fragments/listProduct";
import { BestProduct } from "../fragments/bestProduct";
import { SaleUp } from "../fragments/saleUp";
import { Footer } from "../fragments/footer";
import Testimonial from "../fragments/testi";

function HomePage () {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Keuntungan/>
            <FiturUtama/>
            <ListProduct />
            <BestProduct />
            <Testimonial/>
            <SaleUp />
            <Footer />
        </div>
    )
}

export default HomePage;