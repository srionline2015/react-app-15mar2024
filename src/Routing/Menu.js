import { Link, NavLink } from "react-router-dom";

function Menu()
{
    return <>
        <Link to="/" >Home</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="about">About Us</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="contact" >COntact Us</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="productlist">View all Products</Link>
    </>
}

export default Menu;