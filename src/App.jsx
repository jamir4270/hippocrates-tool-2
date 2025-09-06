import { useState } from "react";
import "./App.css";
import SymptomCard from "./components/SymptomCard";
import { ExpertSystem } from "./utils/expert_system";

function App() {
  const symptoms = [
    "light nasal breathing",
    "heavy nasal breathing",
    "headache",
    "cough",
    "sore throat",
    "antibiotics allergy",
  ];

  const [temperature, setTemperature] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState(new Set());
  const [medication, setMedication] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleCardClick = (symptom) => {
    if (!selectedSymptoms.has(symptom)) {
      setSelectedSymptoms((prevSelectedSymptoms) => {
        const newSet = new Set(prevSelectedSymptoms);
        newSet.add(symptom);
        return newSet;
      });
    } else {
      setSelectedSymptoms((prevSelectedSymptoms) => {
        const newSet1 = new Set(prevSelectedSymptoms);
        newSet1.delete(symptom);
        return newSet1;
      });
    }
    setSubmit(false);
  };

  const handleButtonClick = () => {
    if (!submit) {
      const newMedication = ExpertSystem(selectedSymptoms, temperature);
      setMedication(newMedication);
      setSubmit(true);
      setSelectedSymptoms(() => {
        const newSet = new Set();
        return newSet;
      });
    }
  };

  const handleTemperatureChange = (event) => {
    const value = event.target.value;

    const regex = /^-?\d*\.?\d*$/;

    if (value === "" || regex.test(value)) {
      setTemperature(value);
    }
    setSubmit(false);
  };

  return (
    <div className="main-content">
      <div className="header">
        <h1>Hippocrates' Tool</h1>
        <p>Get proper medication now!</p>
      </div>
      <div className="user-information">
        <div className="temperature-div">
          <label htmlFor="temperature">Temperature: </label>
          <input
            type="text"
            name="temperature"
            id="temperature"
            value={temperature}
            onChange={handleTemperatureChange}
          />
        </div>
        <h3>How are you?</h3>
        <div className="symptom-grid">
          {symptoms.map((item) => {
            return (
              <SymptomCard
                isSelected={selectedSymptoms.has(item)}
                key={item}
                symptom={item}
                onCardClick={handleCardClick}
              />
            );
          })}
        </div>
        <button onClick={handleButtonClick}>Get Medication</button>
      </div>
      <div className="medication-div">
        <h3 className="response-header">Hippocrates' Response</h3>
        <p className="response">
          {submit
            ? medication
            : () => {
                setMedication("");
              }}
        </p>
      </div>
    </div>
  );
}

export default App;
