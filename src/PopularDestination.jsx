import './CSS/PopularDestination.css';

const PopularDestination = (props) => {
  const destination = props.dest;

  return (
    <div className="popular-section">
      <h2 className="popular-title">Popular Destination</h2>
      <p className="popular-subtitle">
        Suffered alteration in some form, by injected humour or good day
        randomised booth anim 8-bit hella wolf moon beard words.
      </p>

      <div className="destination-grid">
        {destination.map((x) => (
          <div className="destination-card" >
            <img src={x.img} alt={x.name} className="destination-img" />
            <div className="destination-info">
              <h3>{x.name}</h3>
              <span className="badge">{x.places}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestination;
