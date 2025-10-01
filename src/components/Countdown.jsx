import "./../App.css";
import { useEffect, useState } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-27T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <h2 className="countdown-title">The Wait Ends In!</h2>
      <div className="countdown">
        <div className="count-item">
          <span>{timeLeft.days.toString().padStart(2, "0")}</span>
          <p>Days</p>
        </div>
        <div className="count-item">
          <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
          <p>Hours</p>
        </div>
        <div className="count-item">
          <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
          <p>Minutes</p>
        </div>
        <div className="count-item">
          <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
