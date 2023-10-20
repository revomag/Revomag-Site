import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./pages/home/home";
import About from "./pages/about/about";
import BookAppointment from "./pages/bookAppointment/bookAppointment";
import Contact from "./pages/contact/contact";
import Information from "./pages/Information/information";
import HowItWorks from "./pages/howItWorks/howItWorks";
import ReferAPatient from "./pages/referAPatient/referAPatient";
import Resources from "./pages/resources/resources";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/information" element={<Information/>}/>
            <Route path="/how-it-works" element={<HowItWorks/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/refer-a-patient" element={<ReferAPatient/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/book-appointment" element={<BookAppointment/>}/>
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
