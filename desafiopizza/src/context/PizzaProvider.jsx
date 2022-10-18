import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const getPizzas = async () => {
    const { data } = await axios.get("/pizzas.json");
    setPizzas(data);
  };
  useEffect(() => {
    getPizzas();
  }, []);
  const addToCart = ({ id, price, name, img }) => {
    const productoEncontrado = carrito.findIndex(
      ({ id: productoId }) => productoId === id
    );
    const producto = { id, price, name, img, count: 1 };
    if (productoEncontrado >= 0) {
      carrito[productoEncontrado].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  return (
    <PizzasContext.Provider
      value={{ pizzas, carrito, setCarrito, addToCart, increment, decrement }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export { PizzasProvider };


export default PizzasContext;