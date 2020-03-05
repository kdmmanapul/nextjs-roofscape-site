import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from "./components/header"
import Footer from "./components/footer"
import Pixel from './components/Pixel'

function ServicePage() {
    const router = useRouter();
    const projectName = router.query.projectName;
    return(
        <div>
            <Pixel name='FACEBOOK_PIXEL_1' />
            <Header/>
            <main>
                <div class="pagehding-sec">
                    <div class="images-overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="page-heading">
                                    <h1>Project Details</h1>
                                </div>
                                <div class="page-breadcrumb-inner">
                                    <div class="page-breadcrumb">
                                        <div class="breadcrumb-list">
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="/projects">Projects</a></li>
                                                <li><a href="#">{projectName}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="project-details-page pt-100 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="project-details-img">
                                    <img src="img/s4.jpg" alt=""/>
                                </div>
                                <div class="project-details-desc">
                                    <h2><a href="#">Fugit oratio no vix, interesset reprehendunt ea duo. Vel ea vide urbanitas sadipscing. Oratio senserit id sed, at vitae graece vis. </a></h2>
                                    <p>Singulis intellegebat vis ut. Qui ea fierent voluptatum dissentias. In quo delicata appellantur, reque scriptorem dissentiunt per an. Eos eu epicurei singulis, eu hinc putant nec. Ad quod sale quaeque est, ut alterum perpetua his. Stet liber eloquentiam ex nam, eu partem torquatos per, vis in iudico offendit. Clita dolorem te vis, usu falli doming dissentias ex.</p>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="project-details-column-text">
                                            <h2>Discere splendide appellantur has at, quo homero voluptaria no, sed ad falli lucilius explicari.</h2>
                                            <p>Quis senserit ei mel. Cu omnium nusquam vivendum eum, te qui movet ornatus. Vide ceteros qui ea. Altera labore vix ne. Ipsum consequuntur mediocritatem in vix, eos fastidii efficiantur id, pri ei fuisset omnesque expetenda. Te modo oblique laboramus per, no elitr corpora eos.</p>
                                            <p>Te vix soluta possit conceptam, no vim amet atomorum elaboraret. Sed cu magna hendrerit. Illud regione ei eum, probatus ocurreret ea vix. Alia illud id nec, mea cu legere rationibus. Et eam brute verear disputando, et vim dicta exerci numquam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="sidebar">
                                    <div class="project-details-info">
                                        <h2>Project Info</h2>
                                        <ul>
                                            <li>Project Name:<span>Architectural</span></li>
                                            {/* <li>Starting Date:<span>21/01/2019</span></li>
                                            <li>Ending Date:<span>14/03/2019</span></li> */}
                                            <li>Duration:<span>2 Month</span></li>
                                            <li>Category:<span>Design</span></li>
                                            <li>Rating:
                                                <span class="client-rating">
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* <div class="service-cat-widget">
                                        <h2 class="widget-title">Project Categroy</h2>
                                        <ul>
                                            <li><a href="#">Repair service</a></li>
                                            <li><a href="#">Expert Mechanical</a></li>
                                            <li><a href="#">Apartment Design</a></li>
                                            <li><a href="#">House Planing</a></li>
                                            <li><a href="#">Repair welding</a></li>
                                            <li><a href="#">Architectural Design</a></li>
                                            <li><a href="#">Construction Management</a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default ServicePage
