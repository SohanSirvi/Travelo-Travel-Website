
const Hero = (props) => {

    const heroMainBg = props.herocontent;

    return (
        <>
            <div className="hero">{
                heroMainBg.map((bg) => {
                    return (
                        <>
                            <div id="carouselExampleCaptions" className="carousel slide">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={bg.bg1} className="d-block" alt="..." />
                                        <div className="overlay"></div>
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                                            <h1 className="display-1">Indonesia</h1>
                                            <h4>Pixel perfect design with awesome contents</h4>
                                            <button type="button" className="btn btn-success p-3 fw-bold">Explore Now</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={bg.bg2} className="d-block" alt="..." />
                                        <div className="overlay"></div>
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                                            <h1 className="display-1">Australia</h1>
                                            <h4>Pixel perfect design with awesome contents</h4>
                                            <button type="button" className="btn btn-success p-3 fw-bold">Explore Now</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={bg.bg3} className="d-block" alt="..." />
                                        <div className="overlay"></div>
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                                            <h1 className="display-1">Switherland</h1>
                                            <h4>Pixel perfect design with awesome contents</h4>
                                            <button type="button" className="btn btn-success p-3 fw-bold">Explore Now</button>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </>
    )
}

export default Hero;