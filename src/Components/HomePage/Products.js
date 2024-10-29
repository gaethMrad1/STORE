import { useContext } from "react";
import ProductContext from "../../Context/ProductContext";
import Product from "./Product";

function Products() {
    const {products} = useContext(ProductContext)

    return(
        <div className="products">
            {products.map((product) => {
                return(
                    <Product
                    key={product.id}
                    url={product.image} 
                    title={product.title}
                    price={product.price}
                    id={product.id}
                    />
                );
            })}
        </div>
    );
}

export default Products;