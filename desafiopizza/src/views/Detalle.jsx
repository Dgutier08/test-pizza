import { useContext } from "react";
import { useParams } from "react-router-dom";
import PizzasContext from "../context/PizzaProvider"

// import "../styles/detalle"

const Detalle = () => {
    const {pizzas, addToCart} = useContext(PizzasContext);
    const{id}=useParams();
    const pizzaDetail = pizzas.find((pizza)=>pizza.id===id);

    return (
        <>
        <div className="container mt-5">
            <div className="card mb-3 estilos">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img 
                          src= {pizzaDetail.img}
                          className="img-fluid estilos rounded-start"
                          alt={pizzaDetail.name}
                          />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">
                            {pizzaDetail.name}
                            </h5>
                            <p className="card-text">{pizzaDetail.desc}</p>
                            <ul>
                                {pizzaDetail.ingredients?.map((ingredient, i)=>(
                                    <li key={i}>
                                        {/*&#127829;  */}
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                            <div className="d-flex justify-content-around">
                                <h4>Precio: ${pizzaDetail.price}</h4>
                                <button
                                className="btn btn-danger"
                                onClick={()=> addToCart(pizzaDetail)}
                                >
                                    Añandir
                                    {/*&#127829;  */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default Detalle;
