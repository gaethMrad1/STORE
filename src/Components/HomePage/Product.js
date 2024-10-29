import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";

function Product({url, title, price, id}) {
    const {setAllPrice, setTotal} = useContext(ProductContext);

    const addProduct = () => {
        setTotal(prev => prev + 1)
        setAllPrice(prev => prev + price)
    }

    return(
        <div className="product">
            <img src={url} alt={title}/>
            <h2>{title}</h2>
            <span>{price}$</span>
            <div className="buttons">
                <button onClick={addProduct}>Add Product</button>
                <Link to={`/product/${id}`}>View Product</Link>
            </div>
        </div>
    );
}

export default Product;