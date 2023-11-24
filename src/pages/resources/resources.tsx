import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import Research from "../../assets/bannerImages/resources.jpeg";
import './resources.scss';

/**
 * Renders the Resources page
 * @constructor
 */
export default function Resources(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner imageSrc={Research} imageAlt={'woman researching'}/>
            <section className={'resources-content-container'}>
                <h2>RESOURCES</h2>
                <p>Below are peer reviewed research studies, systemic reviews, meta studies/analysis, medical reviews, case reports, and research papers pertaining to Orofacial Myofuntional Therapy (OMT) and treatment/relation to the following:</p>
                <h3>Myofuntional Therapy and Tongue Thrust:</h3>
                <ul>
                    <li>
                        <a href={"https://pubmed.ncbi.nlm.nih.gov/32367149/"}>
                            The efficacy of myofunctional therapy in patients with atypical swallowing
                        </a>
                    </li>
                    <li>
                        <a href={"https://pubmed.ncbi.nlm.nih.gov/33113529/"}>
                            Impact of Oral Myofunctional Therapy on Orofacial Myofunctional Status and Tongue Strength in Patients with Tongue Thrust
                        </a>
                    </li>
                </ul>
                <h3>Myofunctional Therapy and TMJ Pain, clenching and grinding:</h3>
                <ul>
                    <li>
                        <a href={"https://www.tandfonline.com/doi/abs/10.1179/crn.2010.033"}>
                            Effects of Orofacial Myofunctional Therapy on Temporomandibular Disorders
                        </a>
                    </li>
                    <li>
                        <a href={"https://aadsm.org/docs/JDSM.1.1.27.pdf"}>
                            The Link between Sleep Bruxism, Sleep Disordered Breathing and Temporomandibular Disorders: An Evidence-based Review
                        </a>
                    </li>
                </ul>
                <h3>Sleep disordered breathing and ADHD in children:</h3>
                <ul>
                    <li>
                        <a href={"https://pubmed.ncbi.nlm.nih.gov/34934269/"}>
                            Sleep Difficulties and Symptoms of Attention-deficit Hyperactivity Disorder in Children with Mouth Breathing
                        </a>
                    </li>
                    <li>
                        <a href={"https://pubmed.ncbi.nlm.nih.gov/9493930/"}>
                            Symptoms of sleep disorders, inattention, and hyperactivity in children
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3313633/"}>
                            Sleep-Disordered Breathing in a Population-Based Cohort: Behavioral Outcomes at 4 and 7 Years
                        </a>
                    </li>
                </ul>
                <h3>Myofunctional Therapy and Sleep Apnea:</h3>
                <ul>
                    <li>
                        <a href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4402674/"}>
                            Myofunctional Therapy to Treat Obstructive Sleep Apnea: A Systematic Review and Meta-analysis
                        </a>
                    </li>
                    <li>
                        <a href={"https://pubmed.ncbi.nlm.nih.gov/25950418/"}>
                            Effects of Oropharyngeal Exercises on Snoring: A Randomized Trial
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.mdpi.com/1648-9144/57/4/323/htm"}>
                            Orofacial Myofunctional Therapy in Obstructive Sleep Apnea Syndrome: A Pathophysiological Perspective
                        </a>
                    </li>
                    <li>
                        <a href={"https://aomtinfo.org/wp-content/uploads/2016/06/Case-Report-UARS-Myofunctional-Therapy-12.2015-Correa.pdf"}>
                            Myofunctional therapy applied to upper airway resistance syndrome: a case report
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.sciencedirect.com/science/article/pii/S0422763816301583?via=ihub"}>
                            Upper airway muscle exercises outcome in patients with obstructive sleep apnea syndrome
                        </a>
                    </li>
                    <li>
                        <a href={"https://link.springer.com/article/10.1007/s00405-017-4848-5"}>
                            Oropharyngeal and tongue exercises (myofunctional therapy) for snoring: a systematic review and meta-analysis
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8066493/"}>
                            Orofacial Myofunctional Therapy in Obstructive Sleep Apnea Syndrome: A Pathophysiological Perspective
                        </a>
                    </li>
                </ul>
                <h3>Myofunctional Therapy’s effect on bed wetting:</h3>
                <ul>
                    <li>
                        <a href={"https://static1.squarespace.com/static/5bbf6664f4755a71f307059f/t/5f9c4fb492d29c2275dadcd7/1604079541776/enuresis.pdf"}>
                            The Effect of Breathing Exercises on the Nocturnal Enuresis in the Children with the Sleep-Disordered Breathing
                        </a>
                    </li>
                </ul>
                <p>“The nocturnal enuresis is more common in the children with the oral breathing. It appears that the relative hypoxia in these children causes low-pressure oxygen in the distal tubes of kidney, unresponsiveness to the anti-diuretic hormone, and increased production of urine temporarily, particularly during the sleep. Both of these factors can increase the volume of urine, and consequently make the urine control more difficult and finally lead to the nocturnal enuresis”</p>
                <h3>Combined effect of myofunctional therapy and tongue tie release surgery:</h3>
                <ul>
                    <li>
                        <a href={"https://onlinelibrary.wiley.com/doi/full/10.1002/lio2.297?campaign=Bestof19&fbclid=IwAR3PZxPZ1CcukKNJDhSu9ScTiItSsAy-cnmiwT127YXRC_RmqQ3sPDKPBrM"}>
                            Lingual Frenuloplasty With Myofunctional Therapy: Exploring Safety and Efficacy in 348 Cases
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.lightscalpel.com/publications/tongue-tie-functional-release/"}>
                            A description of a ‘functional release’ combining myofunctional therapy with a tongue tie release
                        </a>
                    </li>
                </ul>
                <h3>Combined effect of myofunctional therapy and orthodontics:</h3>
                <ul>
                    <li>
                        <a href={"https://www.ajodo.org/article/S0889-5406(09)01331-6/fulltext"}>
                            Relapse of anterior open bites treated with orthodontic appliances with and without orofacial myofunctional therapy
                        </a>
                    </li>
                    <li>
                        <a href={"https://static1.squarespace.com/static/5bbf6664f4755a71f307059f/t/5f9c926a00c8e0323add3b6d/1604096630168/anklyoglossia+evidence+zhaghi.pdf"}>
                            Ankyloglossia as a risk factor for maxillary hypoplasia and soft palate elongation: A functional – morphological study
                        </a>
                    </li>
                    <li>
                        <a href={"https://dentalsleeppractice.com/ce-articles/why-every-dentist-and-orthodontist-should-have-an-orofacial-myofunctional-therapist-on-their-team/"}>
                            Why Every Dentist and Orthodontist Should Have an Orofacial Myofunctional Therapist on Their Team
                        </a>
                    </li>
                </ul>
                <h3>Mouthbreathing:</h3>
                <ul>
                    <li>
                        <a href={"https://academic.oup.com/ejo/article/29/5/426/426214?login=false"}>
                            The effect of mode of breathing on craniofacial growth
                        </a>
                    </li>
                    <li>
                        <a href={"https://link.springer.com/article/10.1007/s11325-015-1154-6"}>
                            Mouth breathing, “nasal disuse”, and pediatric sleep-disordered breathing
                        </a>
                    </li>
                </ul>
            </section>
            <Footer/>
        </>
    );
}
