import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch the submissions when the component mounts
    axios
      .get('http://localhost:5000/api/submissions')
      .then((response) => {
        setSubmissions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching submissions:', error);
      });
  }, []);

  return (
    <div className="container-fluid bg-dark py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-light">Admin Dashboard</h2>
        <div className="row">
          {submissions.length === 0 ? (
            <div className="col-12">
              <p className="text-center text-muted">No submissions yet.</p>
            </div>
          ) : (
            submissions.map((submission) => (
              <div className="col-md-4 mb-4" key={submission._id}>
                <div className="card border-0 shadow-lg rounded-4 bg-secondary text-light">
                  <div className="card-body">
                    <h5 className="card-title text-center text-warning">{submission.name}</h5>
                    <p className="card-text text-muted">
                      <strong>Social Media Handle:</strong> {submission.socialMediaHandle}
                    </p>
                    <div className="text-center">
                      <strong>Uploaded Images:</strong>
                      <div className="d-flex justify-content-center flex-wrap mt-3">
                        {submission.images.map((image, index) => (
                          <div key={index} className="m-2">
                            <a
                              href={`http://localhost:5000/${image}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-block"
                            >
                              <img
                                src={`http://localhost:5000/${image}`}
                                alt={`Submission ${index}`}
                                className="img-thumbnail rounded-lg"
                                style={{
                                  width: '120px',
                                  height: '120px',
                                  objectFit: 'cover',
                                  transition: 'transform 0.3s ease',
                                  border: '2px solid #ffffff',
                                }}
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
