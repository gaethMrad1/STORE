import FilterProducts from "../Components/HomePage/FilterProducts";
import Products from "../Components/HomePage/Products";
import "../Components/HomePage/style.css";

function Home() {
    return(
        <div className="home">
            <div className="container">
                <FilterProducts />
                <Products />
            </div>
        </div>
    );
}

export default Home;