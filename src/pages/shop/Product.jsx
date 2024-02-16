import { useContext } from 'react'
import '../../styles/shop.css'
export default function Product(props){
    const {id,productName,price,productImage}=props.data
    const {addTocart}=useContext(addTocart);
    return(
        <div className="product">
           <img src={productImage} alt={productName} />
           <div className="nom">{productName}</div>
           <div className="prix">${price}</div>
           <button onClick={()=>addTocart(id)}>Add to cart</button>
        </div>
    )
}