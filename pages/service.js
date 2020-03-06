import Head from 'next/head'
import Header from "./components/header"
import Footer from "./components/footer"
import Pixel from './components/Pixel'

const servicesData = [
    {
      img: "img/s3.jpg",
      icon: "icofont-vehicle-wrecking",
      title: "Primary Materials",
      description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
      type: "Primary Materials"
    },
    {
      img: "img/s3.jpg",
      icon: "icofont-architecture-alt",
      title: "Other Materials",
      description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
      type: "Other Materials"
    },
]

function ServicePage() {
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
                                <h1>Services</h1>
                                </div>
                                <div class="page-breadcrumb-inner">
                                    <div class="page-breadcrumb">
                                        <div class="breadcrumb-list">
                                            <ul>
                                                <li><a href="index">Home</a></li>
                                                <li><a href="#">Services</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service-sec pt-100 pb-70 bg-light-gray">
                    <div class="container">
                        <div class="row">
                            <div class="service-item">
                                {
                                    servicesData.map((o, idx) => 
                                    <div class="col-md-6 col-sm-6 inner">
                                        <div class="media">
                                            <div class="service-thumb">
                                                <a href={`service-details?type=${o.type}`}><img src={o.img} alt="" /></a>
                                                <div class="service-icon"></div>
                                            </div>
                                            <div class="service-inner-text">
                                                <div class="service-inner-content">
                                                    <div class="media-left">
                                                        <div class="service_icon">
                                                            <i class={o.icon}></i>
                                                        </div>
                                                    </div>
                                                    <div class="media-body">
                                                        <h2><a href={`service-details?type=${o.type}`}>{o.title}</a></h2>
                                                    </div>
                                                    <p>{o.description}</p>
                                                    {/* <a href={`service-details?type=${o.type}`} class="service-readmore">More Info<span class="lnr lnr-arrow-right"></span></a> */}
                                                    <a href={`/service-category`} class="service-readmore">More Info<span class="lnr lnr-arrow-right"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
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
