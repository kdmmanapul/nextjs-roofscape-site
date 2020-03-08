import { useRouter } from 'next/router'
import Header from "./components/header"
import Footer from "./components/footer"
import Pixel from './components/Pixel'

const servicesCategoryData = [
    {
        img: "img/s3.jpg",
        icon: "icofont-vehicle-wrecking",
        title: "Various Roofing Materials",
        description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
        type: "Roofing"
    },
    {
        img: "img/s3.jpg",
        icon: "icofont-architecture-alt",
        title: "PVC Walls and Ceiling Panels",
        description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
        type: "PVC"
    },
    {
        img: "img/s3.jpg",
        icon: "icofont-worker",
        title: "Waterproofing / Coating",
        description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
        type: "Waterproofing"
    },
    {
        img: "img/s3.jpg",
        icon: "icofont-vehicle-crane",
        title: "General Construction",
        description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
        type: "GenConstruction"
    },
    {
        img: "img/s3.jpg",
        icon: "icofont-building-alt",
        title: "Importation of Materials",
        description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
        type: "Importation"
    },
    {
        img: "img/s3.jpg",
        icon: "icofont-calculations",
        title: "Direct Supplier of Finishing Materials",
        description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
        type: "FinishingMaterials"
    },
    {
        img: "img/s3.jpg",
        icon: "icofont-vehicle-wrecking",
        title: "Various Roofing Materials",
        description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
        type: "Roofing"
    },
    {
        img: "img/s3.jpg",
        icon: "icofont-architecture-alt",
        title: "PVC Walls and Ceiling Panels",
        description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
        type: "PVC"
    },
    {
        img: "img/s3.jpg",
        icon: "icofont-worker",
        title: "Waterproofing / Coating",
        description: "Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper.",
        type: "Waterproofing"
    },
]

function ServiceDetailsPage() {
    const router = useRouter()
    const typeOfService = router.query.type
    const productName = router.query.product
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
                                    <h1>Service Details</h1>
                                </div>
                                <div class="page-breadcrumb-inner">
                                    <div class="page-breadcrumb">
                                        <div class="breadcrumb-list">
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/service">Services</a></li>
                                                <li><a href={`/service-category?type=${typeOfService}`}>{typeOfService}</a></li>
                                                <li><a href="#">{productName}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service-details-page pt-100 pb-100">
                    <div class="container">
                        <div class="row">
                            {/* <div class="col-md-4">
                                <div class="sidebar">
                                    <div class="service-cat-widget">
                                        <h2 class="widget-title">Service Category</h2>
                                        <ul>
                                            <li><a href={`service-details?type=Primary%20Materials`}>Primary</a></li>
                                            <li><a href={`service-details?type=Other%20Materials`}>Secondary</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                            
                            {/* <div class="col-md-8"> */}
                                <div class="service-details">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>{productName}</h2>
                                            <p>in vis doctus consetetur definitionem, cu his vidit feugait recusabo. Duo dicat splendide in. Nobis fuisset ex pri. Pro mucius eruditi accumsan an. In qui minim ridens, mel sint nostrud ea.</p>
                                        </div>
                                        {
                                            servicesCategoryData.map((o, idx) => 
                                            <div class="col-md-3">
                                                <div class="faq-single">
                                                    <button type="button" data-toggle="modal" data-target={`#${o.type}`}>
                                                        <div class="gallery-item">
                                                            <img src="img/classic-blog-1.jpg" alt="" />
                                                            <div class="gallery-overlay">
                                                                <div class="gallery-overlay-text">
                                                                    <h2 style={{ color: "white" }}>{o.title}</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div style={{ marginTop: 80 }} class="modal fade" id={`${o.type}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                                        <div class="modal-content">
                                                        <div class="modal-header" style={{ display: 'flex' }}>
                                                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                            <div style={{ flex: 1 }}/>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div style={{ textAlign: "center" }}>
                                                                <img src="img/classic-blog-1.jpg" alt="" />
                                                                <h4 style={{ marginTop: 20 }}>{o.title}</h4>
                                                                <p>Cillum minim aute consectetur pariatur do et deserunt in duis do ex tempor velit. Esse sunt proident ad aliquip. Commodo occaecat duis reprehenderit fugiat excepteur dolore reprehenderit eiusmod officia. Incididunt proident ullamco aute aliqua amet laborum irure do aliquip. Ex ex dolor esse excepteur nisi nisi quis proident aute. Ullamco eu ad qui do sunt dolor in ullamco commodo do eiusmod mollit.</p>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <a style={{ color: "white" }} href={`contact?item=${o.title}`}><button type="button" class="btn btn-primary">Inquire</button></a>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        }
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>     
            </main>
            <Footer/>
        </div>
    )
}

export default ServiceDetailsPage
