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
import withScrollRestoration from "./components/withScrollRestoration";

/** Wrap routes in withScrollRestoration so that pages always load at top */
const HomeWithScrollRestoration = withScrollRestoration(Home);
const MouthBreathingWithScrollRestoration = withScrollRestoration(MouthBreathing);
const SnoringAndSleepApneaWithScrollRestoration = withScrollRestoration(SnoringAndSleepApnea);
const AdhdAndSleepDisorderedBreathingWithScrollRestoration = withScrollRestoration(AdhdAndSleepDisorderedBreathing);
const TmjPainWithScrollRestoration = withScrollRestoration(TmjPain);
const TongueTieWithScrollRestoration = withScrollRestoration(TongueTie);
const ThumbAndFingerSuckingWithScrollRestoration = withScrollRestoration(ThumbAndFingerSucking);
const TongueThrustWithScrollRestoration = withScrollRestoration(TongueThrust);
const AboutWithScrollRestoration = withScrollRestoration(About);
const BookAppointmentWithScrollRestoration = withScrollRestoration(BookAppointment);
const ContactWithScrollRestoration = withScrollRestoration(Contact);
const HowItWorksWithScrollRestoration = withScrollRestoration(HowItWorks);
const ReferAPatientWithScrollRestoration = withScrollRestoration(ReferAPatient);
const ResourcesWithScrollRestoration = withScrollRestoration(Resources);

/**
 * Site routing
 */
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomeWithScrollRestoration/>}/>
            <Route path="/home" element={<HomeWithScrollRestoration/>}/>
            <Route path="/mouth-breathing" element={<MouthBreathingWithScrollRestoration/>}/>
            <Route path="/snoring-and-sleep-apnea" element={<SnoringAndSleepApneaWithScrollRestoration/>}/>
            <Route path="/adhd-and-sleep-disordered-breathing" element={<AdhdAndSleepDisorderedBreathingWithScrollRestoration/>}/>
            <Route path="/tmj-pain" element={<TmjPainWithScrollRestoration/>}/>
            <Route path="/tongue-tie" element={<TongueTieWithScrollRestoration/>}/>
            <Route path="/thumb-and-finger-sucking" element={<ThumbAndFingerSuckingWithScrollRestoration/>}/>
            <Route path="/tongue-thrust" element={<TongueThrustWithScrollRestoration/>}/>
            <Route path="/how-it-works" element={<HowItWorksWithScrollRestoration/>}/>
            <Route path="/contact" element={<ContactWithScrollRestoration/>}/>
            <Route path="/about" element={<AboutWithScrollRestoration/>}/>
            <Route path="/resources" element={<ResourcesWithScrollRestoration/>}/>
            <Route path="/refer" element={<ReferAPatientWithScrollRestoration/>}/>
            <Route path="/book-appointment" element={<BookAppointmentWithScrollRestoration/>}/>
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
