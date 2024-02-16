import { ShoppingCart } from "phosphor-react";
import {Link} from "react-router-dom"
import '../styles/navbar.css'

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/">Shop</Link>
                <Link to="/">Cart</Link>
                <Link to="/">Contact</Link>
                <Link to="/">A propos</Link>
                {/* <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link> */}
            </div>
        </div>
    )
}