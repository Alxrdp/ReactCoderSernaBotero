import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./ItemCervezas.css";

function Item(props) {
  const { title, litledescription, img } = props;

  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_header">
        <h4>{litledescription}</h4>
      </div>
      <div className="item-card_img">
        <img src={img} alt="imagen"></img>
      </div>
      
      <ButtonComponent>Ver Producto</ButtonComponent>
    </div>
  );
}

export default Item;