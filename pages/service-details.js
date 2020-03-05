import { useRouter } from 'next/router'
import Header from "./components/header"
import Footer from "./components/footer"

function ServiceDetailsPage() {
    const router = useRouter()
    const typeOfService = router.query.type
    console.log(router.query.type)
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
                                    <h1>Service Details</h1>
                                </div>
                                <div class="page-breadcrumb-inner">
                                    <div class="page-breadcrumb">
                                        <div class="breadcrumb-list">
                                            <ul>
                                                <li><a href="index">Home</a></li>
                                                <li><a href="service">Services</a></li>
                                                <li><a href="#">Service Details</a></li>
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
                            <div class="col-md-4">
                                <div class="sidebar">
                                    <div class="service-cat-widget">
                                        <h2 class="widget-title">Service Category</h2>
                                        <ul>
                                            <li><a href="#">Various Roofing Materials</a></li>
                                            <li><a href="#">PVC Walls and Ceiling Panels</a></li>
                                            <li><a href="#">Waterproofing</a></li>
                                            <li><a href="#">General Construction</a></li>
                                            <li><a href="#">Importation of Materials</a></li>
                                            <li><a href="#">Direct Supplier of Finishing Materials</a></li>
                                        </ul>
                                    </div>

                                    {/* <div class="brochures-widget">
                                        <h2 class="widget-title">Brochure</h2>
                                        <ul>
                                            <li><a href="#">Download.Pdf<span><i class="icofont-download-alt"></i></span></a></li>
                                            <li><a href="#">Download.Doc<span><i class="icofont-download-alt"></i></span></a></li>
                                        </ul>
                                    </div>
                                    <div class="discount-widget">
                                        <img src="img/cal-img.jpg" alt=""/>
                                        <div class="discount-widget-overlay">
                                            <div class="discount-widget-wrapper">
                                                <span>50 % offer</span>
                                                <h2>This month</h2>
                                                <a href="#">get Service now</a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            
                            <div class="col-md-8">
                                <div class="service-details">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>Roofing Materials</h2>
                                            <p>in vis doctus consetetur definitionem, cu his vidit feugait recusabo. Duo dicat splendide in. Nobis fuisset ex pri. Pro mucius eruditi accumsan an. In qui minim ridens, mel sint nostrud ea.</p>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="faq-single">
                                                <button type="button" data-toggle="modal" data-target={`#${"abc"}`}>
                                                    <div class="gallery-item">
                                                        <img src="img/classic-blog-1.jpg" alt="" />
                                                        <div class="gallery-overlay">
                                                            <div class="gallery-overlay-text">
                                                                <h2 style={{ color: "white" }}>Plumbing</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>

                                            <div style={{ marginTop: 100 }} class="modal fade" id={"abc"} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                                            <h4 style={{ marginTop: 20 }}>Blue Roof</h4>
                                                            <p>Cillum minim aute consectetur pariatur do et deserunt in duis do ex tempor velit. Esse sunt proident ad aliquip. Commodo occaecat duis reprehenderit fugiat excepteur dolore reprehenderit eiusmod officia. Incididunt proident ullamco aute aliqua amet laborum irure do aliquip. Ex ex dolor esse excepteur nisi nisi quis proident aute. Ullamco eu ad qui do sunt dolor in ullamco commodo do eiusmod mollit.</p>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Inquire</button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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

export default ServiceDetailsPage
