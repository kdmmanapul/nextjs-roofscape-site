import Head from 'next/head'
import Header from "./components/header"
import Footer from "./components/footer"
import Pixel from './components/Pixel'

function ContactPage() {
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
                                    <h1>Contact Us</h1>
                                </div>
                                <div class="page-breadcrumb-inner">
                                    <div class="page-breadcrumb">
                                        <div class="breadcrumb-list">
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact-page-sec pt-100 pb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="contact-info">
                                    <div class="contact-info-item">
                                        <div class="contact-info-icon">
                                            <i class="icofont-map-pins"></i>
                                        </div>
                                        <div class="contact-info-text">
                                            <h2>address</h2>
                                            <span>3315 Counts Lane Wilmore, KY 40390 </span>
                                            <span>Californiya , United State</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="contact-info">
                                    <div class="contact-info-item">
                                        <div class="contact-info-icon">
                                            <i class="icofont-email"></i>
                                        </div>
                                        <div class="contact-info-text">
                                            <h2>E-mail</h2>
                                            <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6a03040c052a09050403121a180f191944090507">[email&#160;protected]</a></span>
                                            <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1861776d6a75797174587f75797174367b7775">[email&#160;protected]</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="contact-info">
                                    <div class="contact-info-item">
                                        <div class="contact-info-icon">
                                            <i class="icofont-wall-clock"></i>
                                        </div>
                                        <div class="contact-info-text">
                                            <h2>office time</h2>
                                            <span>Mon - Thu 9:00 am - 4.00 pm</span>
                                            <span>Thu - Mon 10.00 pm - 5.00 pm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-8">
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
                                                <textarea placeholder="Write Your Message" name="message"></textarea>
                                            </div>
                                        </div>
                                        <div class="single-input-fieldsbtn">
                                            <input type="submit" value="Send Now" />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="contact-page-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503103.25504622894!2d-118.94592338887756!3d34.065964560335836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1497798250780" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
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

export default ContactPage
