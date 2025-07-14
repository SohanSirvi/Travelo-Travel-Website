
import "./CSS/Features.css";

const Features = ({ items }) => {
  return (
    <div className="features-section py-5">
      <div className="container">
        <div className="row text-center">
          {items.map((item) => (
            <div className="col-md-4 mb-4">
              <div className="feature-item">
                <img src={item.image} alt="" />
                <h5 className="mt-3 fw-bold text-dark">{item.title}</h5>
                <p className="text-muted px-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
