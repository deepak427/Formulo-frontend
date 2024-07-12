import './Card.css'

import BootstrapCard from "react-bootstrap/Card";

const Card = ({ patientData }) => {
  return (
    <BootstrapCard>
      <BootstrapCard.Img variant="top" src={patientData.patient_profile} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{patientData.patient_name}</BootstrapCard.Title>
        <BootstrapCard.Text>Next Appointment:</BootstrapCard.Text>
        <BootstrapCard.Subtitle>{patientData.next_appointment.date}</BootstrapCard.Subtitle>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;

// const Card = ({ patientData }) => {
//   return (
//     <div className="card-outer">
//       <img src={patientData.patient_profile} alt={patientData.patient_name} />
//       <div className="patient-desc">
//         <h3>{patientData.patient_name}</h3>
//         <p>Next Appointment:</p>
//         <h4>{patientData.next_appointment.date}</h4>
//       </div>
//     </div>
//   );
// };

// export default Card;
