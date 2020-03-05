import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from "./components/header"
import Footer from "./components/footer"

function AboutPage() {
    const router = useRouter()
    return(
        <div>
            <Header/>
            <main>
                <div class="pagehding-sec">
                    <div class="images-overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="page-heading">
                                    <h1>About Us</h1>
                                </div>
                                <div class="page-breadcrumb-inner">
                                    <div class="page-breadcrumb">
                                    <div class="breadcrumb-list">
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="#">About Us</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="about-us-short-sec pt-100 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="about-us-short">
                                    <span class="sub-title">About Us</span>
                                    <p> <img style={{ maxHeight: 40, marginRight: 5 }} src="img/logo.jpg"/>  was established on April 2003, and from then on, it has successfully accomplished more than hundred thousand square meters of various projects ranging from residential to commercial structures. We perform general construction, and are specialized in the roofing and waterproofing works. than hundred thousand square meters of various projects ranging from residential to commercial structures. We perform general construction, and are specialized in the roofing and waterproofing works.</p>
                                    <p>We cater to different developers, architects, engineers and contractors nationwide. </p>
                                    <p>Moreover, Roofscape is an importer/ distributor of various quality building materials and assists clientele to source-out different products for complete construction requirements</p>
                                    <div style={{ marginTop: "30px" }}>
                                        <span class="sub-title">Our Policy On Quality</span>
                                        <p>
                                            To provide above standard performance, by being sensitive to our commitment and to our client’s need; 
                                            practicing on time deliveries, giving quality services and materials, 
                                            above standard workmanship and dedicated personnel with passion on every work.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="about-us-short">
                                    <span class="sub-title">Our Mission</span>
                                    <div>
                                        <img src="img/mission.png"/>
                                    </div>
                                    <div style={{ marginTop: "30px" }}>
                                        <span class="sub-title">Our Vision</span>
                                        <div>
                                            <img src="img/vision.png"/>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: "30px" }}>
                                        <span class="sub-title">Core Values</span>
                                        <div>
                                            <img src="img/core-values.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="counter-sec">
                    <div class="counter-sec-overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-xs-6 inner">
                                <div class="count-up-inner">
                                    <div class="countup-text">
                                        <div style={{ display: "flex"}}>
                                            <h2 class="counter">200</h2>
                                            <h2>+</h2>
                                        </div>
                                        <h4>Happy Client</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-6 inner">
                                <div class="count-up-inner">
                                    <div class="countup-text">
                                        <div style={{ display: "flex"}}>
                                            <h2 class="counter">100</h2>
                                            <h2>+</h2>
                                        </div>
                                        <h4>Project Complete</h4>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="col-md-3 col-sm-6 col-xs-6 inner">
                                <div class="count-up-inner">
                                    <div class="countup-text">
                                        <h2 class="counter">130</h2>
                                        <h4>Customer Support </h4>
                                    </div>
                                </div>
                            </div> */}

                            <div class="col-md-4 col-sm-6 col-xs-6 inner">
                                <div class="count-up-inner">
                                    <div class="countup-text">
                                        <div style={{ display: "flex"}}>
                                            <h2 class="counter">30</h2>
                                            <h2>+</h2>
                                        </div>
                                        <h4>Award Winner</h4>
                                    </div>
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

export default AboutPage
