
import "./CSS/Footer.css"; 

const Footer = ({ data }) => {
  const {
    logo,
    address,
    socialIcons,
    companyLinks,
    destinations,
    instagramImages,
  } = data;

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col logo-col">
          <img src={logo} alt="" />
          <br /><br />
          {address.map((line) => (
            <p className="text-secondary">{line}</p>
          ))}
          <div className="social-icons text-secondary">
            {socialIcons.map((icon) => (
              <i className={icon}></i>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {companyLinks.map((link) => (
              <li className="text-secondary">{link}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col row">
          <h4>Popular Destination</h4>
          <div className="destination-cols d-flex gap-5">
            <ul>
              {destinations.col1.map((place) => (
                <li className="text-secondary">{place}</li>
              ))}
            </ul>
            <ul>
              {destinations.col2.map((place) => (
                <li className="text-secondary">{place}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-col">
          <h4>Instagram</h4>
          <div className="instagram-grid">
            {instagramImages.map((src, idx) => (
              <img src={src} alt={`insta-${idx}`} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="text-secondary">
          Copyright &copy; 2025 All rights reserved | This template is made with <i class="bi bi-heart-fill text-danger"></i> by Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
