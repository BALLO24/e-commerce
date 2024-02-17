import { useContext } from "react";
import { PRODUCTS } from "../../products";
import Product from "../shop/Product";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
export default function Cart(){
    const {cartItems,getTotalCartAmount}=useContext(ShopContext);
    const totalAmount=getTotalCartAmount()
    return(
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {
                    PRODUCTS.map((product)=>{
                        if(cartItems[product.id]!==0){
                            return <CartItem data={product} key={product.productName}/>
                        }
                    })
                }
            </div>
            <div>
                <p>Subtotal : ${totalAmount}</p>
                <button>Continue Shopping</button>
                <button>Checkout</button>
            </div>
        </div>
    )
}