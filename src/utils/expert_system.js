export function ExpertSystem(selectedSymptoms, temperature) {
  const symptoms = new Set(selectedSymptoms);

  if (temperature < 37.0) {
    symptoms.add("no fever");
  } else if (temperature >= 37.0 && temperature < 38.0) {
    symptoms.add("low fever");
  } else {
    symptoms.add("high fever");
  }

  if (symptoms.has("light nasal breathing")) {
    symptoms.add("nasal discharge");
  }
  if (symptoms.has("heavy nasal breathing")) {
    symptoms.add("sinus membranes swelling");
  }

  let isCold = false;
  if (
    symptoms.has("low fever") &&
    symptoms.has("headache") &&
    symptoms.has("nasal discharge") &&
    symptoms.has("cough")
  ) {
    isCold = true;
  }

  if (isCold && symptoms.has("sore throat")) {
    if (symptoms.has("antibiotic allergy")) {
      return "Please take Tylenol for medication.";
    } else {
      return "Please take antibiotics for medication.";
    }
  } else {
    return "No medication needed";
  }
}
