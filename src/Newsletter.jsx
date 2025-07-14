
import './CSS/Newsletter.css';

const Newsletter = ({ data }) => {
  return (
    <div className="newsletter-section">
      {data.map((item, index) => (
        <div key={index} className="newsletter-content">
          <h2 className="newsletter-title">{item.title}</h2>
          <p className="newsletter-description">{item.description}</p>
          <div className="newsletter-input-group">
            <input
              type="email"
              placeholder={item.placeholder}
              className="newsletter-input"
            />
            <button className="newsletter-button">{item.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Newsletter;
