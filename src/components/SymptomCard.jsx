import "./SymptomCard.css";

function SymptomCard({ isSelected, symptom, onCardClick }) {
  const classes = `card ${isSelected ? "selected" : ""}`;
  return (
    <div className={classes} onClick={() => onCardClick(symptom)}>
      {symptom}
    </div>
  );
}

export default SymptomCard;
