import "./../App.css";
import venue from "./../assets/venue.png";
import time from "./../assets/time.png";
import date from "./../assets/date.png";

function InfoSection() {
  return (
    <section className="info-section">
      <h2 className="info-title">Wedding Info</h2>
      <div className="info-timeline">
        {/* Vertical line in background */}
        <div className="info-line"></div>

        <div className="info-item">
          <img src={venue} alt="Venue" className="info-icon" />
          <div className="info-details">
            <h3>Venue</h3>
            <p>Ambals Wedding Hall, Maskeliya</p>
          </div>
        </div>

        <div className="info-item">
          <img src={time} alt="Time" className="info-icon" />
          <div className="info-details">
            <h3>Time</h3>
            <p>09:00 AM - 12:30 PM</p>
          </div>
        </div>

        <div className="info-item">
          <img src={date} alt="Date" className="info-icon" />
          <div className="info-details">
            <h3>Date</h3>
            <p>Thursday, November 27, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
