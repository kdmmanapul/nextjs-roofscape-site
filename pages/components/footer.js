import Head from 'next/head'
import { useRouter } from 'next/router'

function Footer() {
    const router = useRouter()
    console.log(router)
    console.log(router.pathname)
    return (
        <div>
            <main>
                <footer class="footer">
                    <div class="footer-overlay"></div>

                    <div class="footer-sec">
                        <div class="container" style={{ padding: 0, margin: "0 0 0 5 !important" }}>
                            <div class="row">
                            {
                                router.pathname === "/contact" ? 
                                <div class="col-md-8 col-sm-6 footer-widget">
                                    <div class="footer-wedget-one">
                                        <div class="contact-page-form" method="post">
                                            <h2>About Us</h2>
                                            <p>
                                            was established on April 2003, and from then on, it has successfully accomplished more <br/> 
                                            than hundred thousand square meters of various projects ranging from residential <br/>
                                            to commercial structures. We perform general construction, and are specialized <br/>
                                            in the roofing and waterproofing works. than hundred thousand square meters of <br/>
                                            various projects ranging from residential to commercial structures. <br/>
                                            We perform general construction, and are specialized in the roofing and <br/>
                                            waterproofing works.
                                            </p>
                                            <p>
                                                To provide above standard performance, by being sensitive to our commitment <br/>
                                                and to our client’s need; practicing on time deliveries, giving quality services <br/>
                                                and materials, above standard workmanship and dedicated personnel <br/> 
                                                with passion on every work.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div class="col-md-8 col-sm-6 footer-widget">
                                    <div class="footer-wedget-one">
                                        <div class="contact-page-form" method="post">
                                            <h2>Get in Touch</h2>
                                            <form action="contact-mail.php" method="post">
                                                <div class="col-md-6 col-sm-6 col-xs-12">
                                                    <div class="single-input-field">
                                                        <input type="text" placeholder="Your Name" name="name" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-12">
                                                    <div class="single-input-field">
                                                        <input type="email" placeholder="E-mail" name="email" required />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-12">
                                                    <div class="single-input-field">
                                                        <input type="text" placeholder="Phone Number" name="phone" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-12">
                                                    <div class="single-input-field">
                                                        <input type="text" placeholder="Subject" name="subject" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12 message-input">
                                                    <div class="single-input-field">
                                                        <textarea placeholder="Write your message/concerns here." type="text" name="message"/>
                                                    </div>
                                                </div>
                                                <div class="single-input-fieldsbtn">
                                                    <input type="submit" value="Send Now" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                                

                                <div class="col-md-4 col-sm-6 footer-widget">
                                    <div class="footer-wedget-four">

                                        <div class="footer-contact-inner">
                                            <div class="footer-contact-info">
                                                <div class="footer-contact-info-icon">
                                                    <i class="icofont-google-map"></i>
                                                </div>
                                                <div class="footer-contact-info-text">
                                                    <span>ROOFSCAPE ENTERPRISE </span>
                                                    <span>1135 EDSA, Balintawak, Quezon City </span>
                                                    <span>Philippines</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="footer-contact-inner">
                                            <div class="footer-contact-info">
                                                <div class="footer-contact-info-icon">
                                                    <i class="icofont-email"></i>
                                                </div>
                                                <div class="footer-contact-info-text">
                                                    {/* <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d7aeb8a2a5bab6bebb97b0bab6bebbf9b4b8ba">[email&#160;protected]</a></span>
                                                    <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6b02050d042b08040502131b190e181845080406">[email&#160;protected]</a></span> */}
                                                    <span>roofscape@roofscape.com.ph</span>
                                                    <span>customerinquiry@roofscape.com.ph</span>
                                                    <span>customersupport@roofscape.com.ph</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="footer-contact-inner">
                                            <div class="footer-contact-info">
                                                <div class="footer-contact-info-icon">
                                                    <i class="icofont-telephone"></i>
                                                </div>
                                                <div class="footer-contact-info-text">
                                                    <span>Phone #: 8-330-1703</span>
                                                    <span>Globe : 0956-4020638</span>
                                                    <span>Smart : 0908-8728870</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="footer-social">
                                            <ul>
                                                <li><a href="#"><i class="icofont-facebook"></i></a></li>
                                                <li><a href="#"><i class="icofont-twitter"></i></a></li>
                                                <li><a href="#"><i class="icofont-linkedin"></i></a></li>
                                                <li><a href="#"><i class="icofont-skype"></i></a></li>
                                                <li><a href="#"><i class="icofont-pinterest"></i></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="footer-bottom-sec">
                        <div class="container">
                            <div class="row">
                                {/* <div class="col-md-4 col-sm-4"> */}
                                    <div class="copy-right" style={{ textAlign: "center" }}>
                                        <span>&copy; 2019 Roofscape Enterprise. All Right Reserved </span>
                                    </div>
                                {/* </div> */}
                                {/* <div class="col-md-4 col-sm-4">
                                    <div class="footer-logo">
                                        <a href="/"><img src="img/logo.jpg" alt="" /></a>
                                    </div>
                                </div> */}
                                {/* <div class="col-md-4 col-sm-4">
                                    <div class="site-developer">
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </footer>
            </main>

            <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="js/jquery-2.2.4.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/isotope.pkgd.min.js"></script>
            <script src="js/jquery.magnific-popup.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/owl.animate.js"></script>
            {/* <script src="js/jquery.scrollUp.min.js"></script> */}
            <script src="js/jquery.counterup.min.js"></script>
            <script src="js/modernizr.min.js"></script>
            <script src="js/waypoints.min.js"></script>
            <script src="js/jquery.meanmenu.min.js"></script>
            <script src="js/imagesloaded.pkgd.min.js"></script>
            <script src="js/custom.js"></script>
        </div>
    )
}

export default Footer
