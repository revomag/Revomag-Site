import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import './disclaimer.scss';

/**
 * Renders the Disclaimer page
 * @constructor
 */
export default function Disclaimer(): ReactElement {
    return (
        <div className={'disclaimer-content'}>
            <Navigation/>
            <section className={'disclaimer-content-container'}>
                <h1>Goodlee CO Liability Disclaimer</h1>
                <p>The website is owned by David Robison and Goodlee CO.</p>
                <p>By accepting delivery of this Revomag by Goodlee CO you acknowledge and agree to the following
                    conditions:</p>
                <p>Goodlee CO is proud of the quality and detail that goes into each Revomag manufactured.
                    While confident that Goodlee CO customers are receiving a top of the line product, it is an
                    undeniable fact that firearms are inherently dangerous and their use can cause serious injury
                    and/or death.</p>
                <p>Do not, in any way, alter your Revomag as this could result in a safety issue. Goodlee Co. and its
                    owners bear no liability for accidents occurring as a result of a Revomag altered after  it is
                    received by the purchaser.</p>
                <p>If your Revomag made by Goodlee Co becomes worn, loose, or defective at any time, cease use
                    immediately as the Revomag will no longer be safe to use at this time. In the event that your
                    Revomag does become worn, loose, defective then please contact Goodlee CO immediately for warranty
                    coverage instructions. Goodlee CO accepts no responsibility or liability for accidents or deaths
                    due to their product. The entire risk as to the quality and performance of the product is with the
                    buyer.</p>
                <p>Because Goodlee Co has no control over how it’s Revomag will be used, or who they will be used by
                    following their purchase, Goodlee Co and its owners disclaim any and all liability for incidental
                    or consequential damages to people and/or property resulting from any use of the Revomag.
                    The decision to carry a firearm, either for recreation or for personal defense, carries the risk
                    and potential for injury and/or death. Therefore, it is advised that you seek out and acquire
                    proper training before using a firearm or any firearm related product.</p>
                <h4>Contact Me.</h4>
                <p>By using my Website you are agreeing to all parts of the above Disclaimer. If you have any questions
                    about this Disclaimer, please contact me at <a
                        href="mailto:davesemail@email.com">davesemail@email.com</a>.</p>
            </section>
        </div>
    );
}
