import { useContext, useEffect, useRef, useState } from "react";
import ProductContext from "../../Context/ProductContext";

function FilterProducts() {
    const [categories, setCategories] = useState([]);
    const {setProducts} = useContext(ProductContext)
    const ul = useRef();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    

    const active = (e) => {
        let array = Array.from(ul.current.children)
        array.forEach((child) => {
            child.classList.remove("active")
        })
        e.target.classList.add("active")
        if (e.target.textContent !== "All") {
            fetch(`https://fakestoreapi.com/products/category/${e.target.textContent}`)
            .then(res => res.json())
            .then(data => setProducts(data))
        } else {
            fetch(`https://fakestoreapi.com/products/`)
            .then(res => res.json())
            .then(data => setProducts(data))
        }
    }

    return(
        <div className="filter">
            <ul ref={ul}>
                <li onClick={active}>All</li>
                {categories.map(categorie => {
                    return <li onClick={active}>{categorie}</li>
                })}
            </ul>
        </div>
    );
}

export default FilterProducts;