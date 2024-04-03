import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Unauthorized from "./Unauthorized";
import ProductList from "./ProductList";
import { ProductDetail } from "./ProductDetail";

function RoutingConfig()
{
    return <>
        <Routes>
            <Route path="/" element={<Home></Home>} ></Route>
            <Route path="about" element={<About></About>} ></Route>
            <Route path="contact" element={<Contact></Contact>} ></Route>
            <Route path="*" element={<Unauthorized></Unauthorized>} ></Route>
            <Route path="productlist" element={<ProductList></ProductList>} ></Route>
            <Route path="viewproduct/:productId" element={<ProductDetail></ProductDetail>} ></Route>
        </Routes>
    </>
}

export default RoutingConfig;