import Head from 'next/head'
import Header from "./components/header"
import Footer from "./components/footer"
import Pixel from '../components/Pixel'

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
                                    <h1>Projects</h1>
                                </div>
                                <div class="page-breadcrumb-inner">
                                    <div class="page-breadcrumb">
                                        <div class="breadcrumb-list">
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="#">Projects</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-sec pt-100 pb-100">
                    <div class="container">
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
                                        <li class="" data-filter=".Management"> <span class="gallery-tab-title">Management</span></li>
                                        <li class="" data-filter=".Repair"><span class="gallery-tab-title">Repair</span></li>
                                        <li class="" data-filter=".Design"><span class="gallery-tab-title">Design </span></li>
                                    </ul>
                                </div> */}

                                <div class="gallery-container">
                                    {
                                        dataValues.map((o, idx) => {
                                            return <div class="col-xs-12 col-sm-6 col-md-3 filtr-item Management">
                                                <div class="latest-project-inner">
                                                    <div class="latest-project-inner-img">
                                                        <img src={o.img} alt="" />
                                                        <div class="latest-project-link">
                                                            <ul>
                                                                <li>
                                                                    <a href={o.img} class="gallery-photo"><i class="icofont-expand"></i></a>
                                                                    {/* <a href="#"><i class="icofont-link"></i></a> */}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="latest-project-inner-desc">
                                                            <div class="latest-project-inner-text">
                                                                <span>{o.type}</span>
                                                                <h2><a href={`project-details?projectName=${o.name}`}>{o.name} </a></h2>
                                                            </div>
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
            </main>
            <Footer/>
        </div>
    )
}

export default ServicePage
