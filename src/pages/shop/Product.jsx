import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';
import '../../styles/shop.css'
export default function Product(props){
    const {id,productName,price,productImage}=props.data
    const {addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount=cartItems[id];
    return(
        <div className="product">
           <img src={productImage} alt={productName} />
           <div className="nom">{productName}</div>
           <div className="prix">${price}</div>
           <button onClick={()=>addToCart(id)}>Add to cart{cartItemAmount>0 && <>({cartItemAmount })</>}</button>
        </div>
    )
}