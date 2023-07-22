import { useState, useEffect } from "react";
import getData from "../../services/asyncMock";
import Item from "../Item/Item";

function ItemListContainer() {

  console.log("Renderizamos item list container");
  const [products, setProducts] = useState([]);

  async function requestProducts() {
    const respuesta = await getData();
    setProducts(respuesta);
  }

  useEffect(() => {
    console.log("Montaje ILC");
    requestProducts();
  }, []);

  return (
    <div>
      <h1>Listado de Productos</h1>
      <div className="flex-container">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;