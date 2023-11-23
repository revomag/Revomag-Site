import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./pages/home/home";
import MouthBreathing from "./pages/Information/mouthBreathing/mouthBreathing";
import SnoringAndSleepApnea from "./pages/Information/snoringAndSleepApnea/snoringAndSleepApnea";
import AdhdAndSleepDisorderedBreathing
    from "./pages/Information/adhdAndSleepDisorderedBreathing/adhdAndSleepDisorderedBreathing";
import TmjPain from "./pages/Information/tmjPain/tmjPain";
import TongueTie from "./pages/Information/tongueTie/tongueTie";
import ThumbAndFingerSucking from "./pages/Information/thumbAndFingerSucking/thumbAndFingerSucking";
import TongueThrust from "./pages/Information/tongueThrust/tongueThrust";
import About from "./pages/about/about";
import BookAppointment from "./pages/bookAppointment/bookAppointment";
import Contact from "./pages/contact/contact";
import HowItWorks from "./pages/howItWorks/howItWorks";
import ReferAPatient from "./pages/referAPatient/referAPatient";
import Resources from "./pages/resources/resources";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/mouth-breathing" element={<MouthBreathing/>}/>
            <Route path="/snoring-and-sleep-apnea" element={<SnoringAndSleepApnea/>}/>
            <Route path="/adhd-and-sleep-disordered-breathing" element={<AdhdAndSleepDisorderedBreathing/>}/>
            <Route path="/tmj-pain" element={<TmjPain/>}/>
            <Route path="/tongue-tie" element={<TongueTie/>}/>
            <Route path="/thumb-and-finger-sucking" element={<ThumbAndFingerSucking/>}/>
            <Route path="/tongue-thrust" element={<TongueThrust/>}/>
            <Route path="/how-it-works" element={<HowItWorks/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/refer-a-patient" element={<ReferAPatient/>}/>
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
