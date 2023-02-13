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
        throw new Error("Network response was not ok. Kitties have chewed interwebs.");
      })
      .then((res) => setPhysicians(res))
      .physicianch(() => navigate("/"));
  }, []);

  const allPhysicians = physicians.map((physician, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={physician.img_url}
          className="card-img-top"
          alt={`${physician.name} image`}
        />
        <div className="card-body bg_primary-color">
          <h5 className="card-title secondary-color ">{physician.name}</h5>
          <Link to={`/physician/${physician.id}`} className="btn custom-button">
            {`Meet ${physician.name}`}
          </Link>
        </div>
      </div>
    </div>
  ));
  const noPhysician = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No known physicians yet. Why not <Link to="/new_physician">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center bg_secondary-color" >
        <div className="container py-5">
          <h1 className="display-4 primary-color">A little directory of physicians we know</h1>
          <p className="lead text-muted secondary-color">
            We’ve pulled together all the furballs and kittehs in our lives and shared them all here. 
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3 secondary-color">
            <Link to="/physician" className="btn custom-button">
              Create New Physician Listing
            </Link>
          </div>
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