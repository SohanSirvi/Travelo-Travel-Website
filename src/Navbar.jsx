import './CSS/Navbar.css';

const Navbar = ({ navcontent, socialIcons }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-2">
            <div className="container-fluid d-flex align-items-center justify-content-between">

                <a className="navbar-brand d-flex align-items-center gap-2" href="/">
                    <img src={navcontent[0].logo} alt="Logo" style={{ height: '30px' }} />
                    <span className="fw-bold text-dark">{navcontent[0].label}</span>
                </a>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse justify-content-between" id="mainNavbar">

                    <ul className="navbar-nav mx-auto gap-4">
                        {navcontent.slice(1, 6).map((x) => (
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-medium" href={x.url}>
                                    {x.label}
                                </a>
                            </li>
                        ))}
                    </ul>


                    <div className="d-flex align-items-center gap-3 right-section">

                        <div className="d-flex align-items-center gap-1 border-end pe-3">
                            <i className="bi bi-telephone text-danger"></i>
                            <span className="text-dark fw-medium small">10(256)-928 256</span>
                        </div>


                        <div className="d-flex align-items-center gap-2 border-end pe-3">
                            {socialIcons.map((icon) => (
                                <a href={icon.url} className="text-muted fs-6">
                                    <i className={`bi bi-${icon.icon}`}></i>
                                </a>
                            ))}
                        </div>


                        <div className="bg-danger p-2 rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-search text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
