
import "./CSS/Places.css";

const Places = ({ data }) => {
  return (
    <div className="popular-places py-5">
      <div className="container text-center">
        <h2 className="mb-2 fw-bold">Popular Places</h2>
        <p className="text-muted mb-5">
          Suffered alteration in some form, by injected humour or good day <br />
          randomised booth anim 8-bit hella wolf moon beard words.
        </p>

        <div className="row g-3">
          {data.map((place) => (
            <div className="col-md-4">
              <div className="card place-card border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="card-img-top"
                  />
                  <span className="badge bg-success position-absolute top-0 start-0 m-2">
                    {place.price}
                  </span>
                </div>
                <div className="card-body text-start">
                  <h5 className="card-title mb-1">{place.title}</h5>
                  <small className="text-muted d-block mb-2">
                    {place.country}
                  </small>
                  <div className="d-flex justify-content-between text-muted small">
                    <span>
                      <i className="bi bi-star-fill text-warning me-1"></i>
                      {place.reviews}
                    </span>
                    <span>
                      <i className="bi bi-clock me-1"></i>
                      {place.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-danger mt-5 px-4 py-2 div1">More Places</button>
      </div>
    </div>
  );
};

export default Places;
