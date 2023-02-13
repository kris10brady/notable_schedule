import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Physicians = () => {
  const navigate = useNavigate();
  const [physicians, setPhysicians] = useState([]);

  useEffect(() => {
    const url = "/api/v1/physicians/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setPhysicians(res))
      .catch(() => navigate("/"));
  }, []);

  const allPhysicians = physicians.map((physician, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <div className="card-body bg_primary-color">
          <h5 className="card-title secondary-color ">{physician.last_name}</h5>
          <Link to={`/physician/${physician.id}`} className="btn custom-button">
          {`${physician.last_name}, ${physician.first_name}`}
          </Link>
        </div>
      </div>
    </div>
  ));


  const noPhysician = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No known physicians yet.
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center bg_secondary-color" >
        <div className="container py-5">
          <h1 className="display-4 primary-color">Appointments by Physician</h1>
          <p className="lead text-muted secondary-color">
            Click on physician to see their appointments
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="row">
            {physicians.length > 0 ? allPhysicians : noPhysician}
          </div>

          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Physicians;