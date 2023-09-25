import React, {ReactElement} from "react";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";

export default function Home(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>Hello World! This is Nicole's Myo site!</div>
            <div>
                <p>
                    Oral Myofunctional Therapy in the Puget Sound region of Washington serving communities of Seattle, Kenmore, Lake Forest Park, Bothell, Bellevue, Kirkland, Lynnwood, Edmonds, Brier, Mountlake Terrace, Everett and surrounding communities.
                </p>
            </div>
            <div>
                <p>
                    Oral myofunctional therapy targets the oral motor muscles used to chew and swallow.  Myofunctional therapy is used to treat a variety of disorders including: tongue tie, tongue thrust, incorrect tongue position, low tongue posture, open mouth posture, thumb sucking, finger sucking, nail biting, clenching/grinding, TMJ pain, temporomandibular joint disorder (TMD), snoring and sleep apnea.
                    <br/><br/>
                    Therapy utilizes exercises, awareness and reduction of muscle compensation with the overarching goal to correct improper muscle movements to restore proper function.
                </p>
            </div>
            <Footer/>
        </>
    );
}