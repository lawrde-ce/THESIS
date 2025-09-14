import dash from "../cssmodules/dashboard.module.css";
import location from "../assets/map.png";
import symptom from "../assets/symptom.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className={dash.dashboardSection}>
      <h1 className={dash.title}>ASK-PIL</h1>
      <p className={dash.description}>
        Get Instant Health recommendations and find nearby medical facilities.
      </p>
      <div className={dash.option}>
        <div className={dash.options}>
          <div className={dash.imageContainer}>
            <img src={symptom} alt="symptom" className={dash.img} />
          </div>
          <h2>Symptom Check</h2>
          <p className={dash.optionText}>
            Describe symptoms. Get instant first-aid tips.
          </p>
          <Link to="/symptoms">
            <button>START SYMPTOM CHECK</button>
          </Link>
        </div>
        <div className={dash.options}>
          <div className={dash.imageContainer}>
            <img src={location} alt="location" className={dash.img} />
          </div>
          <h2>Find Nearby</h2>
          <p className={dash.optionText}>
            Locate the nearest pharmacies and hospitals in your areas.
          </p>
          <Link to="/locations">
            <button>FIND PHARMACY/HOSPITAL</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
