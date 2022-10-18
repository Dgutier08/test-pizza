import { BrowserRouter, Route, Routes } from "react-router-dom"
import {PizzasProvider} from "./context/PizzaProvider"
import Carrito from "./views/Carrito"
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Detalle from "./views/Detalle"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <PizzasProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas/:id" element={<Detalle />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*"/>
          </Routes>
        </PizzasProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
