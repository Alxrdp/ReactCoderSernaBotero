import { useState, useEffect } from "react";
import getData from "../../services/asyncMock";
import "../Item/ItemCervezas.css";
import ItemDetail from "./ItemDetail";

function ItemDetailsCont() {

  const [product, setProduct] = useState({});

  async function requestProducts() {
    const respuesta = await getData();
    setProduct(respuesta[0]);
  }

  useEffect(() => {
    requestProducts();
  }, []);

  return <ItemDetail product={product} />
 
}

export default ItemDetailsCont;