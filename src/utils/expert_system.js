export function ExpertSystem(selectedSymptoms, temperature) {
  const symptoms = new Set(selectedSymptoms);
  const diagnosisList = [];

  //Rules 1 to 3
  if (temperature < 37.0) {
    symptoms.add("no fever");
  } else if (temperature >= 37.0 && temperature < 38.0) {
    symptoms.add("low fever");
    diagnosisList.push("low fever");
  } else {
    symptoms.add("high fever");
    diagnosisList.push("high fever");
  }

  //Rule 4 and 5
  if (symptoms.has("light nasal breathing")) {
    symptoms.add("nasal discharge");
    diagnosisList.push("nasal discharge");
  } else if (symptoms.has("heavy nasal breathing")) {
    symptoms.add("sinus membranes swelling");
    diagnosisList.push("sinus membranes swelling");
  }

  //Rule 6
  let isCold = false;
  if (
    symptoms.has("low fever") &&
    symptoms.has("headache") &&
    symptoms.has("nasal discharge") &&
    symptoms.has("cough")
  ) {
    isCold = true;
    diagnosisList.push("cold");
  }

  const diagnosis = `You have ${diagnosisList.join(", ")}. `;
  //Rule 7 to 12
  if (isCold && symptoms.has("sore throat")) {
    if (symptoms.has("antibiotics allergy")) {
      return diagnosis + "Please take Tylenol for medication.";
    } else {
      return diagnosis + "Please take antibiotics for medication.";
    }
  } else {
    return diagnosisList.length > 0
      ? diagnosis + "No treatment or medication needed."
      : "No treatment or medication needed.";
  }
}
