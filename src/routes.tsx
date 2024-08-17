import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Resources from "./pages/resources/resources";
import Disclaimer from "./pages/disclaimer/disclaimer";
import Privacy from "./pages/privacy/privacy";
import withScrollRestoration from "./components/withScrollRestoration";

/** Wrap routes in withScrollRestoration so that pages always load at top */
const HomeWithScrollRestoration = withScrollRestoration(Home);
const AboutWithScrollRestoration = withScrollRestoration(About);
const ContactWithScrollRestoration = withScrollRestoration(Contact);
const ResourcesWithScrollRestoration = withScrollRestoration(Resources);
const DisclaimerWithScrollRestoration = withScrollRestoration(Disclaimer);
const PrivacyWithScrollRestoration = withScrollRestoration(Privacy);

/**
 * Site routing
 */
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomeWithScrollRestoration/>}/>
            <Route path="/home" element={<HomeWithScrollRestoration/>}/>
            <Route path="/contact" element={<ContactWithScrollRestoration/>}/>
            <Route path="/about" element={<AboutWithScrollRestoration/>}/>
            <Route path="/resources" element={<ResourcesWithScrollRestoration/>}/>
            <Route path="/disclaimer" element={<DisclaimerWithScrollRestoration/>}/>
            <Route path="/privacy" element={<PrivacyWithScrollRestoration/>}/>
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
