import { useRouter } from 'next/router'
import Header from "./components/header"
import Footer from "./components/footer"
import Pixel from './components/Pixel'

function ContactPage() {
    const router = useRouter()
    const item = router.query.item
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
                                                <li><a href="index">Home</a></li>
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
                                            <span>ROOFSCAPE ENTERPRISE </span>
                                            <span>1135 EDSA, Balintawak, Quezon City </span>
                                            <span>Philippines</span>
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
                                            {/* <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6a03040c052a09050403121a180f191944090507">roofscape@gmail.com.ph</a></span>
                                            <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1861776d6a75797174587f75797174367b7775">customersupport@roofscape.com.ph</a></span> */}
                                            <span>roofscape@roofscape.com.ph</span>
                                            <span>customerinquiry@roofscape.com.ph</span>
                                            <span>customersupport@roofscape.com.ph</span>
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
                                            <span>Mon - Fri 8:00 am - 5:00 pm</span>
                                            <span>Saturday 8:00 pm - 12:00 nn</span>
                                            <span></span>
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
                                                <textarea name="message">{item ? `I want to inquire about this item ${item}. Get back to me as soon as possible.` : "Write your message/concerns here."}</textarea>
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
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15439.915382078583!2d121.008899!3d14.657142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ec4c3835cb11144!2sRoofscape!5e0!3m2!1sen!2sph!4v1583492958868!5m2!1sen!2sph" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
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
