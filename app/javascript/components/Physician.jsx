import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Physician = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [physician, setPhysician] = useState({ id: "", appointments: []});
 
  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setPhysician(response))
      .catch(() => navigate("/physicians"));
  }, [params.id]);


  const appointments = physician.appointments.map((appointment, index) => (
    <div key={index}>
    <ul className="list-group">
      <li className="list-group-item">
          {`time: ${appointment.time }`}
      </li>
      <li className="list-group-item">
      {`type: ${appointment.kind }`}
      </li>
    </ul>
  </div>
  
))

  
  return (
    <div >
      {appointments}
      <Link to="/physicians" className="btn btn-link secondary-color">
          Back to Physician Directory
      </Link>  
    </div>  
  );



};

export default Physician;