import { PRODUCTS } from "../../products"
import Product from "./Product"
export default function Shop(){
    return(
        <div className="shop">
            
            {
                PRODUCTS.map((product)=>(<Product key={product.id} data={product}/>))
            }
        </div>
    )
}