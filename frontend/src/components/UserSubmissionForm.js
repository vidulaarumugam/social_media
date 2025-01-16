import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const UserSubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    socialMediaHandle: '',
    images: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the data (including files)
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('socialMediaHandle', formData.socialMediaHandle);

    // Append the images to the FormData object
    if (formData.images) {
      for (let i = 0; i < formData.images.length; i++) {
        formDataToSend.append('images', formData.images[i]);
      }
    }

    // Submit the form data to the backend
    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert(data.message || 'Submission failed!');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="socialMediaHandle" className="form-label">Social Media Handle:</label>
          <input
            type="text"
            className="form-control"
            id="socialMediaHandle"
            name="socialMediaHandle"
            value={formData.socialMediaHandle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">Upload Images:</label>
          <input
            type="file"
            className="form-control"
            id="images"
            name="images"
            onChange={handleFileChange}
            multiple
          />
        </div>
        <button type="submit" className="btn btn-primary w-10">Submit</button>

        <div className="mt-3">
          <button
            type="button"
            className="btn btn-secondary w-5"
            onClick={() => navigate('/admin-login')}
          >
            Admin Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSubmissionForm;
