import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import About from "./pages/about/about";
import Resources from "./pages/resources/resources";
import Disclaimer from "./pages/disclaimer/disclaimer";
import Privacy from "./pages/privacy/privacy";
import CartPage from "./pages/cart/CartPage";
import OrderSuccess from "./pages/orderSuccess/OrderSuccess";
import withScrollRestoration from "./components/withScrollRestoration";

/** Wrap routes in withScrollRestoration so that pages always load at top */
const HomeWithScrollRestoration = withScrollRestoration(Home);
const ProductsWithScrollRestoration = withScrollRestoration(Products);
const AboutWithScrollRestoration = withScrollRestoration(About);
const ResourcesWithScrollRestoration = withScrollRestoration(Resources);
const DisclaimerWithScrollRestoration = withScrollRestoration(Disclaimer);
const PrivacyWithScrollRestoration = withScrollRestoration(Privacy);
const CartPageWithScrollRestoration = withScrollRestoration(CartPage);
const OrderSuccessWithScrollRestoration = withScrollRestoration(OrderSuccess);

/**
 * Site routing
 */
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomeWithScrollRestoration/>}/>
            <Route path="/home" element={<HomeWithScrollRestoration/>}/>
            <Route path="/products" element={<ProductsWithScrollRestoration/>}/>
            <Route path="/about" element={<AboutWithScrollRestoration/>}/>
            <Route path="/resources" element={<ResourcesWithScrollRestoration/>}/>
            <Route path="/disclaimer" element={<DisclaimerWithScrollRestoration/>}/>
            <Route path="/privacy" element={<PrivacyWithScrollRestoration/>}/>
            <Route path="/cart" element={<CartPageWithScrollRestoration/>}/>
            <Route path="/order-success" element={<OrderSuccessWithScrollRestoration/>}/>
        </>
    )
);

function Routes() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default Routes;
