import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
export default function CartItem(props) {
    const { id, productName, price, productImage } = props.data
    const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext)
    return (
        <div >
            <img src={productImage} alt="" />
            <div className="nom">{productName}</div>
            <div className="prix">${price}</div>
            <div className="countHandler">
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input type="text" value={cartItems[id]} onChange={(e)=>{updateCartItemCount(Number(e.target.value))}}/>
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    )
}