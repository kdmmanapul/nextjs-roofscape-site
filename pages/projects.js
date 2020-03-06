import Head from 'next/head'
import Header from "./components/header"
import Footer from "./components/footer"
import Pixel from './components/Pixel'

const dataValues = [
    {
        type: "ReginaRosaril",
        name: "Regina Rosarii, the Pilgrim’s Place",
        product: "Owens Corning Oak 30",
        place: "Tanay, Rizal",
        img: "img/p1.jpg",
    },
    {
        type: "Tiendesitas",
        name: "Tiendesitas Redevelopment",
        product: "Owens Corning Oak 30",
        place: "Frontera Verde, Brgy. Ugong, Pasig City",
        img: "img/p2.jpg"
    },
    {
        type: "BayleafHotel",
        name: "Lyceum of the Philippines Bayleaf Hotel Manila",
        product: "Stone Coated Roof Tiles",
        place: "Instramuros Manila",
        img: "img/p3.jpg"
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
                                            return <div class="col-xs-12 col-sm-6 col-md-4 filtr-item Management">
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
                                                                {/* <span>{o.type}</span> */}
                                                                <h2><a href={`project-details?projectName=${o.name}&product=${o.product}&place=${o.place}`}>{o.name} </a></h2>
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
