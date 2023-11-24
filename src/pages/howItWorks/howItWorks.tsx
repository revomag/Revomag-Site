import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import SmilingWoman from "../../assets/bannerImages/howItWorksWomanSmiling.jpeg";
import './howItWorks.scss';

export default function HowItWorks(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner imageSrc={SmilingWoman} imageAlt={'Woman smiling'}/>
            <div className={'how-content'}>
                <h1>How It Works</h1>
                <h2 className={'how-goals'}>These are the four goals of myofunctional therapy:</h2>
                <ol>
                    <li>Nasal breathing all day and night</li>
                    <li>Lips sealed all day and night</li>
                    <li>Tongue on the roof of your mouth all day and night</li>
                    <li>Correct chewing and swallowing</li>
                </ol>
                <p>Orofacial Myofunctional Therapy is similar to physical therapy, but for your mouth. It is designed to achieve the four goals and restore proper breathing and oral function through a series of exercises focused on the muscles of the mouth, face, head and neck.</p><br/>
                <p>The first visit will be a 90-minute comprehensive exam. It will include an evaluation and examination of the muscles of your mouth, throat and airway.  We will discuss your pain points and explore underlying issues that are contributing to them. During this visit we will take photographs and a video of swallowing, We will then discuss your dysfunctions and conditions and explain how myofunctional therapy can address them. This exam is $225 and will be collected at the time of service.</p><br/>
                <p>Therapy sessions are every 2 weeks and are between 30-45 minutes. They can be done virtually or at our office. For optimal results, you will be expected to perform exercises for 5 minutes, twice a day. Therapy is generally 6-9 months.</p><br/>
                <p>Costs: During your comprehensive exam you will receive a quote for your therapy based on an estimate of how many sessions will be required. Most patients require a comprehensive therapy program, which is $2,500. A pay in full discount is available or we can arrange a monthly payment plan. Dental and medical insurance usually do NOT help with the costs associated with myofunctional therapy, however we do accept funds from FSA and HSA accounts.</p><br/>
                <p>*The cost of the consultation is not included in the cost of therapy.</p>
            </div>
            <Footer/>
        </>
    );
}
