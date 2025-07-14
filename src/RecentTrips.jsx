
import './CSS/RecentTrips.css';

function RecentTrips({ trips }) {
  return (
    <section className="recent-trips">
      <h2 className="text-center mb-5">Recent Trips</h2>
      <div className="container">
        <div className="row justify-content-center">
          {trips.map((trip) => (
            <div className="col-md-4 mb-4">
              <div className="trip-card">
                <img src={trip.image} alt="Trip" className="trip-image" />
                <div className="trip-content">
                  <p className="trip-date">{trip.date}</p>
                  <h5 className="trip-title">{trip.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentTrips;
