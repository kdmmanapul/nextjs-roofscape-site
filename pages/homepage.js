import Head from 'next/head'


const dataValues = [
    {
        type: "Repair",
        name: "Construction Repair Service",
        img: "img/lp1.jpg"
    },
    {
        type: "Management",
        name: "Construction Management",
        img: "img/lp2.jpg"
    },
    {
        type: "Design",
        name: "Architectural Design",
        img: "img/lp3.jpg"
    },
    {
        type: "Stuff",
        name: "Expert Mechanical",
        img: "img/lp4.jpg"
    },
    {
        type: "Planning",
        name: "House Planning",
        img: "img/lp5.jpg"
    },
    {
        type: "Welding",
        name: "Repair welding",
        img: "img/lp6.jpg"
    },
    {
        type: "Repair",
        name: "Construction Management",
        img: "img/lp1.jpg"
    },
    {
        type: "Stuff",
        name: "Appartment Management",
        img: "img/lp5.jpg"
    },
]

const HomePage = () => (
  <div>
      <main>
        <div class="slider">
            <div class="all-slide owl-item">
                <div class="single-slide" style={{ backgroundImage: "url(img/RoofscapeBanner.jpg)" }}>
                    {/* <div class="slider-overlay"></div> */}
                    <div class="slider-wrapper">
                        <div class="slider-text">
                            <div class="slider-caption">
                                <h1>ROOFING	&bull; WATERPROOFING &bull; GENERAL CONSTRUCTION</h1>
                                {/* <p>Guaranteed NO LEAK, BEAUTIFUL ROOF!</p> */}
                                <ul>
                                    <li><a href="about">learn more</a></li>
                                    <li><a href="contact">contact us</a></li>
                                </ul>
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
                            <p style={{ margin: "0 !important" }}> <img style={{ maxHeight: 40, marginRight: 5 }} src="img/logo.jpg"/>  was established on April 2003, and from then on, it has successfully accomplished more than hundred thousand square meters of various projects ranging from residential to commercial structures. We perform general construction, and are specialized in the roofing and waterproofing works. than hundred thousand square meters of various projects ranging from residential to commercial structures. We perform general construction, and are specialized in the roofing and waterproofing works.</p>
                            <br/>
                            <p style={{ margin: "0 !important" }}>We cater to different developers, architects, engineers and contractors nationwide. </p>
                            <br/>
                            <p>Moreover, Roofscape is an importer/ distributor of various quality building materials and assists clientele to source-out different products for complete construction requirements</p>
                            {/* <h2>Our Mission</h2> */}
                            <ul>
                                <li style={{ fontWeight: "bold" }}>Our Mission</li>
                                <li style={{ fontWeight: "bold" }}>Our Vision</li>
                                <li style={{ fontWeight: "bold" }}>Our Policy On Quality</li>
                                <li style={{ fontWeight: "bold" }}>Core Value</li>
                            </ul>
                            <a href="/about" class="simple-btn">More Details <span class="lnr lnr-arrow-right"></span></a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="about-us-thumb">
                            <img src="img/exterior.png" alt=""/>
                            <img src="img/interior.png" alt="" style={{ margin: "1rem 0 0 8rem" }}/>
                        </div>
                    </div>
                </div>
            </div>
		</div>

		<div class="service-sec pt-100 pb-70 bg-light-gray">
            <div class="container">
                <div class="row title-sec-v2-area">
                    <div class="col-md-4">
                        <div class="sec-title-v2">
                            <span>Get Service</span>
                            <h1>What we do in here</h1>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="sec-title-v2-subtitle">
                            <p>We supply and offer installation of various construction materials like Roofing Materials, Waterproofing Materials, PVCs and etc. We are also distributing construction materials like phenolic boards, plywoods, asphalts and many more.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="service-item">

                        <div class="col-md-4 col-sm-6 inner">
                            <div class="media">
                                <div class="service-thumb">
                                    <a href="service-details.html"><img src="img/s1.jpg" alt="" /></a>
                                    <div class="service-icon"></div>
                                </div>
                                
                                <div class="service-inner-text">
                                    <div class="service-inner-content">
                                        <div class="media-left">
                                            <div class="service_icon">
                                                <i class="icofont-architecture-alt"></i>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h2><a href="service-details?type=try1">Various <span>Roofing Materials</span></a></h2>
                                        </div>
                                        <p>We offer various roofing materials that can guarantee quality.</p>
                                        <a href="service-details?type=try1" class="service-readmore">Read More <span class="lnr lnr-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 inner">
                            <div class="media">
                                <div class="service-thumb">
                                    <a href="service-details.html"><img src="img/s2.jpg" alt="" /></a>
                                    <div class="service-icon"></div>
                                </div>

                                <div class="service-inner-text">
                                    <div class="service-inner-content">
                                        <div class="media-left">
                                            <div class="service_icon">
                                                <i class="icofont-architecture-alt"></i>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h2><a href="service-details?type=try2"> <span>Waterproofing Materials</span></a></h2>
                                        </div>
                                        <p>We offer a variety of waterproofing materials that are high in quality.</p>
                                        <a href="service-details?type=try2" class="service-readmore">Read More <span class="lnr lnr-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 inner">
                            <div class="media">
                                <div class="service-thumb">
                                    <a href="service-details.html"><img src="img/s3.jpg" alt="" /></a>
                                    <div class="service-icon"></div>
                                </div>

                                <div class="service-inner-text">
                                    <div class="service-inner-content">
                                        <div class="media-left">
                                            <div class="service_icon">
                                                <i class="icofont-worker"></i>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h2><a href="service-details.html"><span>General Construction</span></a></h2>
                                        </div>
                                        <p>We offer general construction.</p>
                                        <a href="#" class="service-readmore">Read More <span class="lnr lnr-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="service-item">

                        <div class="col-md-4 col-sm-6 inner">
                            <div class="media">
                                <div class="service-thumb">
                                    <a href="service-details.html"><img src="img/s1.jpg" alt="" /></a>
                                    <div class="service-icon"></div>
                                </div>
                                
                                <div class="service-inner-text">
                                    <div class="service-inner-content">
                                        <div class="media-left">
                                            <div class="service_icon">
                                                <i class="icofont-architecture-alt"></i>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h2><a href="service-details?type=try1">Various <span>Roofing Materials</span></a></h2>
                                        </div>
                                        <p>We offer various roofing materials that can guarantee quality.</p>
                                        <a href="service-details?type=try1" class="service-readmore">Read More <span class="lnr lnr-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 inner">
                            <div class="media">
                                <div class="service-thumb">
                                    <a href="service-details.html"><img src="img/s2.jpg" alt="" /></a>
                                    <div class="service-icon"></div>
                                </div>

                                <div class="service-inner-text">
                                    <div class="service-inner-content">
                                        <div class="media-left">
                                            <div class="service_icon">
                                                <i class="icofont-architecture-alt"></i>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h2><a href="service-details?type=try2"> <span>Waterproofing Materials</span></a></h2>
                                        </div>
                                        <p>We offer a variety of waterproofing materials that are high in quality.</p>
                                        <a href="service-details?type=try2" class="service-readmore">Read More <span class="lnr lnr-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 inner">
                            <div class="media">
                                <div class="service-thumb">
                                    <a href="service-details.html"><img src="img/s3.jpg" alt="" /></a>
                                    <div class="service-icon"></div>
                                </div>

                                <div class="service-inner-text">
                                    <div class="service-inner-content">
                                        <div class="media-left">
                                            <div class="service_icon">
                                                <i class="icofont-worker"></i>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h2><a href="service-details.html"><span>General Construction</span></a></h2>
                                        </div>
                                        <p>We offer general construction.</p>
                                        <a href="#" class="service-readmore">Read More <span class="lnr lnr-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
		</div>

		<div class="why-choose-us-v1-sec">
            <div class="why-us-sec-overlay"></div>
            <div class="container">
                <div class="row">
                    {/* <div class="col-md-6 col-sm-12 col-xs-12"> */}
                        <div class="video-inner" style={{ marginBottom: "100px" }}>
                            <div class="vedio-button">
                                <a href="https://www.facebook.com/roofscapePH/videos/490456195214964/" class="mfp-iframe vedio-play"><i class="icofont-play"></i></a>
                            </div>
                            <h4 class="video-play-button"><a href="https://www.facebook.com/roofscapePH/videos/490456195214964/" class="mfp-iframe vedio-play">Play Now Video</a></h4>
                        </div>
                    {/* </div> */}

                    {/* <div class="col-md-6 col-sm-12 col-xs-12"> */}
                        <div class="why-choose-v1">
                            <div class="why-choose-v1-title">
                                <span>Why Choose Us</span>
                                <h1>Why Trust Our Client</h1>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="why-choose-v1-single">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            {/* <i class="icofont-engineer"></i> */}
                                        </div>
                                    </div>

                                    <div class="media-body">
                                        <h2>EXPERIENCE</h2>
                                        <p>
                                            Roofscape Enterprise key officers and lead installers have been in the roofing and waterproofing industry since 1990’s. 
                                            They gained wide and practical experiences from their previous jobs. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="why-choose-v1-single">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            {/* <i class="icofont-rocket-alt-1"></i> */}
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h2>INNOVATIVE APPROACH</h2>
                                        <p>
                                            Roofscape Enterprise is continuously making research and innovations to improve our products and services necessary for the maximum performance of our products. 
                                            We are the first to introduce the Z-STOP for fungus inhibition; Baffled System Ridge Vent for proper roof ventilation; 
                                            Armor Deck as dependable Phenolic waterproof coated; among others.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="why-choose-v1-single">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            {/* <i class="icofont-support-faq"></i> */}
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h2>HIGH LEVEL OF ENGINEERING AND MAINTENANCE SUPPORT</h2>
                                        <p>
                                            Not only our engineers, our lead installers also are well trained on the various complexity of roofing installation. 
                                            They are trained how to approach every roof detail to assure our program “no leak beautiful roof”. 
                                            We also offer comprehensive program for long term maintenance of our roof installed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                            <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="why-choose-v1-single">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            {/* <i class="icofont-engineer"></i> */}
                                        </div>
                                    </div>

                                    <div class="media-body">
                                        <h2>INSTALLATION POLICY</h2>
                                        <p>
                                            We claimed to be the only roofing contractor that maintains key installers on regular basis;
                                            not per project or sub-contractual type wherein workmanship suffers because of the fixed lump sum price arrangement 
                                            based on per square meter area. All our works are guaranteed.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="why-choose-v1-single">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            {/* <i class="icofont-rocket-alt-1"></i> */}
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h2>STRATEGIC OFFICE LOCATION</h2>
                                        <p>
                                            Roofscape Enterprise maintains branch location in San Fernando, Pampanga to conveniently and effectively served our client 
                                            in the northern part of Luzon, Same in the southern part, we have office operation in Silang, Cavite. 
                                            Our operation in EDSA, Balintawak, served as the main office.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="why-choose-v1-single">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            {/* <i class="icofont-support-faq"></i> */}
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h2>CLIENT CENTERED SERVICE</h2>
                                        <p>
                                            Our personnel are trained to give importance to every client’s needs. 
                                            We strictly follow the commitment of our fellow employees to their clients 
                                            and work hard to meet the client’s expectations and requirements
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
		</div>

		<div class="gallery-sec pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sec-title">
                            <h1>Project Gallery</h1>
                            <p>Ea sale impetus laoreet nec, eu mea labore virtute mediocrem. Probo populo electram pri id. Ei sed laoreet scaevola suavitate, mel in eirmod accumsan scripserit. His cu munere invidunt probatus.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="gallery-area">

                        {/* <div class="navbarsort">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarfiltr" aria-expanded="false">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            </button>
                            <div class="shorttitle">
                                <h2>Sort Gallery</h2>
                            </div>
                        </div>

                        <div class="collapse navbar-collapse latest--project" id="navbarfiltr">
                            <ul class="simplefilter">
                                <li class="active" data-filter="*"><span class="gallery-tab-title">All</span></li>
                                <li class="" data-filter=".Mechanical"> <span class="gallery-tab-title">Mechanical</span></li>
                                <li class="" data-filter=".welding"><span class="gallery-tab-title">welding</span></li>
                                <li class="" data-filter=".architecture"><span class="gallery-tab-title">architecture </span></li>
                            </ul>
                        </div> */}

                        <div class="gallery-container">
                            {
                                dataValues.map((o) => {
                                    return <div class="col-xs-12 col-sm-6 col-md-3 filtr-item architecture">
                                        <div class="gallery-item">
                                            <img src={o.img} alt="" />
                                            <div class="gallery-overlay">
                                                <div class="gallery-overlay-text">
                                                    <h2><a href="#">{o.name}</a></h2>
                                                    <span class="gallery-button">
                                                    <a href={o.img} class="gallery-photo"><i class="icofont-image"></i></a>
                                                    <a href="#"><i class="icofont-external-link"></i></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                        {/* <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="gallery-load-more-btn">
                                        <a href="#"><i class="icofont-plus"></i> View More Gallery <i class="icofont-thin-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
		</div>

		<div class="call-to-action-sec">
            <div class="call-to-action-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-7">
                        <div class="call-to-action-text">
                            <h2>contact with us for customer support</h2>
                            <p>we are provide 24/7 hours to support.</p>
                            <a href="contact.html" class="btn"><i class="icofont-live-support"></i> get support <i class="icofont-thin-double-right"></i></a>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-5">
                        <div class="call-to-thumb">
                            <img src="img/call-to-thumb.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
		</div>
      </main>
  </div>
)

export default HomePage
