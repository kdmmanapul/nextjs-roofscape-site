import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function Header() {
    const router = useRouter()

    return(
        <div>
            <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <meta name='description' content='Description' />
            <meta name='keywords' content='Keywords' />

            <link rel="manifest" href="/manifest.json" />
            <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
            <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#317EFB"/>

            <title>Roofscape Enterprise</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="img/apple-touch-icon.png"/>
            <link rel="apple-touch-icon" sizes="57x57" href="img/apple-touch-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="img/apple-touch-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="img/apple-touch-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="img/apple-touch-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="img/apple-touch-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon-180x180.png"/>

            <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800" rel="stylesheet"/>
            <link rel="stylesheet" href="css/bootstrap.min.css"/>
            <link rel="stylesheet" href="css/magnific-popup.css"/>
            <link rel="stylesheet" href="css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="css/animate.css"/>
            <link rel="stylesheet" href="css/main.css"/>
            <link rel="stylesheet" href="style.css"/>
            <link rel="stylesheet" href="css/meanmenu.min.css"/>
            <link rel="stylesheet" href="css/icofont.min.css"/>
            <link rel="stylesheet" href="css/linearicons-min.css"/>
            <link rel="stylesheet" href="css/responsive.css"/>
            </Head>

            <main>
            <header class="header-sec">

                <div class="header-top">
                <div class="container">
                    <div class="row">

                    <div class="col-md-3 col-sm-12 col-xs-8">
                        <div class="logo">
                        <a href="index"><img src="img/logo.jpg" alt="" /></a>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-8">
                        <div class="header-bar-inner">
                        <div class="header-left">
                            <span class="contact-tp-title">Guaranteed No LEAK </span>
                        {/* <ul> */}
                            {/* <li><i class="icofont-telephone"></i>+8-330-1703</li> */}
                            {/* <li><i class="icofont-email"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d3babdb5bc93b0bcbdbaaba3a1b6a0a0fdb0bcbe">[email&#160;protected]</a></li> */}
                        {/* </ul> */}
                        </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-4">
                        <div class="header-top-right">
                        <div class="header-right-div">
                        <div class="soical-profile">
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
                </div>

                <div class="hd-sec">
                <div class="container">
                    <div class="row">

                    <div class="col-md-3 col-xs-8 responsive-logo">
                    <a href="index.html"><img src="img/logo.png" alt="" /></a>
                    </div>

                    <div class="mobile-nav-menu"></div>
                    <div class="col-md-9 col-sm-9 nav-menu">
                    <div class="menu">
                        <nav id="main-menu" class="main-menu">
                        <ul>
                            <li class={router.pathname === "/" ? "active" : null}><Link href="/"><a>Home</a></Link>
                            </li>
                            <li class={router.pathname === "/about" ? "active" : null}><Link href="/about"><a>About Us</a></Link></li>
                            <li class={router.pathname === "/service" || router.pathname === "service-details" ? "active" : null}><Link href="/service"><a>Service</a></Link>
                            {/* <ul>
                                <li><Link href="/service-details"><a>Service Details</a></Link></li>
                            </ul> */}
                            <ul>
                                <li><a href="/service-category">Primary Materials<i class="fa fa-angle-right"></i></a>
                                    <ul>
                                        <li><a href="service-details?Primary%20Materials">Roofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Waterproofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Roofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Waterproofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Roofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Waterproofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Roofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Waterproofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Roofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Waterproofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Roofing</a></li>
                                        <li><a href="service-details?Primary%20Materials">Waterproofing</a></li>
                                    </ul>
                                </li>
                                <li><a href="/service-category">Other Materials<i class="fa fa-angle-right"></i></a>
                                    <ul>
                                        <li><a href="service-details?Other%20Materials">Other Materials</a></li>
                                        <li><a href="service-details?Other%20Materials">Other Materials</a></li>
                                        <li><a href="service-details?Other%20Materials">Other Materials</a></li>
                                        <li><a href="service-details?Other%20Materials">Other Materials</a></li>
                                        <li><a href="service-details?Other%20Materials">Other Materials</a></li>
                                    </ul>
                                </li>
                            </ul>
                            </li>
                            <li class={router.pathname === "/projects" || router.pathname === "project-details" ? "active" : null}><Link href="/projects"><a>Project</a></Link>
                            {/* <ul>
                                <li><Link href="/project-details"><a>Project Details</a></Link></li>
                            </ul> */}
                            </li>
                            <li class={router.pathname === "/contact" ? "active" : null}><Link href="/contact"><a>Contact</a></Link></li>
                        </ul>
                        </nav>
                    </div>
                    </div>


                    <div class="col-md-3 col-sm-3 applay-button-area">
                    <div class="applay-button">
                        <a href="/contact"><span class="lnr lnr-phone-handset"></span> Get Support <span class="lnr lnr-arrow-right"></span></a>
                    </div>
                    </div>

                    </div>
                </div>
                </div>

            </header>
            
            </main>
            <MessengerCustomerChat
                themeColor="#0084FF"
                pageId={2071208729806750}
            />
        </div>
    )
}

export default Header