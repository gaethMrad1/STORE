import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Components/ViewProductPage/style.css";
import ProductContext from "../Context/ProductContext";

function ViewProduct() {
    const [product, setProduct] = useState({});
    const {setAllPrice, setTotal} = useContext(ProductContext);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])

    const addProduct = () => {
        setAllPrice(prev => prev + product.price);
        setTotal(prev => prev + 1);
    }

    return(
        <div className="view-product">
            <h3>Product {id}</h3>
            <div className="card">
                <img src={product.image} alt={product.title}/>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <span>{product.price}$</span>
                <button onClick={addProduct}>Add Product</button>
            </div>
        </div>
    );
}

export default ViewProduct;