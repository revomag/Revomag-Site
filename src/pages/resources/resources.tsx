import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Research from "../../assets/bannerImages/Assembling.png";
import './resources.scss';

/**
 * Renders the Resources page
 * @constructor
 */
export default function Resources(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner
                imageSrc={Research}
                imageAlt={'woman researching'}
                imageTitle={'Someone doing online research on myofunctional therapy'}
            />
            <section className={'resources-content-container'}>
                <h1>Resources</h1>
                <p>The below resources provide an introduction to the use of the Revomag, as well as answers to commonly asked questions.</p>
                <h3>Terms used to describe Revomag components:</h3>
                <ul>
                    <li>
                        // TODO: Should these be individual bullets with a description of what the component is and does?
                        <p>Side tabs, side tab wedge, follower, ramp, front forward opening, advanced cartridge</p>
                    </li>
                </ul>
                <h3>Loading the Revomag:</h3>
                <ol>
                    <li>
                        <p>Pinch the side tabs to drop the follower</p>
                    </li>
                    <li>
                        <p>Insert cartridge</p>
                    </li>
                    <li>
                        <p>Let go of the side tabs</p>
                    </li>
                    <li>
                        // TODO: This isn't clear
                        <p>Push the cartridge straight back and retain it with the side tabs. (Side tab wedge needs to be on top of the cartridge going down the ramp.)</p>
                    </li>
                    <li>
                        <p>Repeat steps 2, 3, and 4 until 8 cartridges of 38 special have been loaded, or 9 cartridges of 327 Mag.</p>
                    </li>
                    <li>
                        // TODO: Where/how am I checking the stack? Also, where is the rimlock video?
                        <p>Check the stack. Revolver cartridges have rims. Each rim should be oriented in front of the Cartridge rim below it so that the cartridge can fall freely. (See Potential rim - lock video for more detailed information.)</p>
                    </li>
                </ol>
                <h3>Loading A Revolver:</h3>
                <ol>
                    <li>
                        <p>After firing the cartridges. Transfer the revolver to your non-dominant hand and strike the ejector rod. Keep the revolver in your non-dominant hand for the remainder of the reload.</p>
                        <ul>
                            <li>
                                <p>Reloading takes dexterity and should be performed with your dominant hand.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Pin the revolver to your stomach with the cylinder open. Cradle the frame between your index and middle finder. Use your thumb to hold the cylinder open.</p>
                        <ul>
                            <li>
                                <p>When using the Revomag and the practice cylinder, guiding each advanced cartridge into the chamber of the cylinder is primarily based on sight, because you are holding both items directly in your line of sight. However, once the revolver is down by your stomach, “feel” will become part of the reloading experience.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Draw the Revomag using a scooping motion. Revomag can be carried in the pocket or inside the waistband.</p>
                    </li>
                    <li>
                        <p>Use that advanced cartridge as a guide into each chamber of the cylinder.</p>
                    </li>
                    <li>
                        <p>Press both release tabs using your thumb and index finger. Keep the release tabs pressed until the cartridge fully falls into the chamber.</p>
                        <ul>
                            <li>
                                <p>It is important to hold the Revomag in the palm of your hand keeping it in place with the middle, ring, and pinky fingers so that you can fully release the side tabs with your thumb and index fingers. If the side tabs are not fully released then a new cartridge will not reach the advanced forward position.</p>
                            </li>
                            <li>
                                <p>The Revomag uses gravity to insert the cartridge into the chamber. Therefore, proper vertical alignment is needed.</p>
                            </li>
                        </ul>
                    </li>
                </ol>
                <h3>Potential Rim - Lock:</h3>
                <ul>
                    <li>
                        <p>It is important to check the cartridge stack before using the Revomag for personal protection so that you can be certain it will operate flawlessly when you need it.</p>
                    </li>
                    <li>
                        <p>Revolver cartridges have rims. Each cartridge rim should be oriented in front of the cartridge rim below it.</p>
                    </li>
                    <li>
                        <p>When loading the Revomag, it is important to push each cartridge straight back until it can be retained by the side tabs. If the nose/front of the cartridge is pushed down during the loading process, then the rear of the cartridge may tip up causing the rim of the cartridge being loaded could go behind the rim of the cartridge below it. This would create a rim lock.</p>
                    </li>
                    <li>
                        <p>If a rim-lock occurs during the loading process, it can be remedied as follows. With the nose/tip of the cartridge in a downward vertical direction, firmly strike the base plate with your other hand. This will break spring tension and allow gravity to bring the locked rim in front of the cartridge rim below it. Now the cartridge will fall freely when the release side tabs are pressed.</p>
                    </li>
                    <li>
                        <p>A rim lock can also occur in circumstances such as:</p>
                        <ul>
                            <li>
                                <p>If the base plate was used for kubaton</p>
                            </li>
                            <li>
                                <p>If the device is dropped on the base plate</p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3>Revolver Advantages:</h3>
                <ul>
                    <li>
                        <p>Much more than a semi automatic handgun, a revolver is simple, dependable, and easy to use.</p>
                    </li>
                    <li>
                        <p>No safety. Using a double action trigger takes a deliberate and intentional action, but without the risk of forgetting to remove any additional safety.</p>
                    </li>
                    <li>
                        <p>No mag release button on the handle. It is possible that on a small sub-compact semi-auto the user can produce a malfunction by inadvertently pressing the mag release button. The most common instance of this is during the draw.</p>
                    </li>
                    <li>
                        <p>Revolvers are easy and comfortable to carry. The cylinder fits naturally between the recess of lets and torso. A shorter handle prevents excess printing. A shorter barrel prevents excess jabbing. Double action only revolvers have a rounded back edge that is softer on the body than the sharp corner of the side and handle of a semi-automatic handgun.</p>
                    </li>
                    <li>
                        <p>Lightweight - most snub nose revolvers have a aluminum frame</p>
                    </li>
                    <li>
                        <p>Minimizes Malfunctions. I'm a gun guy, and I understand malfunctions and how to clear them. However, I don’t practice them regularly and I don't have good muscle memory for clearing them. Every time a malfunction happens I first stare blankly at the firearm for about 30 seconds before I can even start thinking about what happened and how it can be cleared. However, with the revolver, if the cylinder is latched, and you hear a click no bang, all you need to do is pull the trigger again.</p>
                    </li>
                    <li>
                        <p>Customizible handle. Laser, boot grip, ect. More than just a grip change.</p>
                    </li>
                    <li>
                        <p>Revolvers are not ammo specific</p>
                    </li>
                    <li>
                        <p>Point shooting. Meaning, you can press the barrel of a revolver into an object and fire at the same time. That is one of the reasons the revolver excels at close quarter combat.</p>
                    </li>
                    <li>
                        <p>Shoot from concealment or next to loose clothing. (Double action only)</p>
                    </li>
                    <li>
                        <p>No reciprocating slide means less muzzle rise.</p>
                    </li>
                    <li>
                        <p>Firm striking tool for close quarter combat.</p>
                    </li>
                </ul>
            </section>
        </>
    );
}
