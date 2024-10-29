import { Link } from "react-router-dom";
import "./style.css";
import { useContext, useRef } from "react";
import ProductContext from "../../Context/ProductContext";

function Header() {
    const {total, allPrice, setTotal, setAllPrice} = useContext(ProductContext)
    const aside = useRef();

    const show = () => {
        aside.current.classList.toggle("show")
    }

    const emptyBasket = () => {
        setTotal(0)
        setAllPrice(0)
    }

    return(
        <>
            <header>
                <div className="container">
                    <Link to="/store">STORE</Link>
                    <i onClick={show} className="fa-brands fa-shopify"></i>
                </div>
            </header>
            <aside ref={aside}>
                <i className="fa-solid fa-basket-shopping"></i>
                <span>Total: {total}</span>
                <span>The Price: {allPrice}$</span>
                <button onClick={emptyBasket}>Empty Basket</button>
            </aside>
        </>
    );
}

export default Header;