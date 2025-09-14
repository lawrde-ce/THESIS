import symp from "../cssmodules/symptom.module.css";
import { Link } from "react-router-dom";

function Symptoms() {
  return (
    <div className={symp.symptomSection}>
      <h2 className={symp.title}>Select Your Symptom(s)</h2>
      <p className={symp.description}>
        Please select the symptom(s) you are experiencing from the list below:
      </p>
      <div className={symp.symptomList}>
        <div className={symp.symptomItem}>
          <div className={symp.iconContainer}>iconContainer</div>
          <h2>Headache</h2>
          <p>Headpain or pressure</p>
        </div>
        <div className={symp.symptomItem}>
          <div className={symp.iconContainer}>iconContainer</div>
          <h2>Cough</h2>
          <p>Persistent coughing</p>
        </div>
        <div className={symp.symptomItem}>
          <div className={symp.iconContainer}>iconContainer</div>
          <h2>Fever</h2>
          <p>High body Temperature</p>
        </div>
        <div className={symp.symptomItem}>
          <div className={symp.iconContainer}>iconContainer</div>
          <h2>Stomach Pain</h2>
          <p>Abdominal discomfort</p>
        </div>
        <div className={symp.symptomItem}>
          <div className={symp.iconContainer}>iconContainer</div>
          <h2>Nausea</h2>
          <p>Feeling of sick or queasy</p>
        </div>
        <div className={symp.symptomItem}>
          <div className={symp.iconContainer}>iconContainer</div>
          <h2>Chest Pain</h2>
          <p>Pain in chest area</p>
        </div>
      </div>
      <div className={symp.navigationButtons}>
        <Link to="/">
          <button className={symp.backButton}>Back</button>
        </Link>
        <button className={symp.nextButton}>Next</button>
      </div>
    </div>
  );
}

export default Symptoms;
