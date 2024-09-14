import React, { useState } from 'react';
import './InvestorForm.css';

const InvestorForm = () => {
  const [formData, setFormData] = useState({
    profileName: '',
    email: '',
    category: 'IPR',
    projectTitle: '',
    projectDescription: '',
    fundingAmount: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit-fund', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Form Data Submitted:', result);
        alert('Form data submitted successfully!');
        setFormData({
          profileName: '',
          email: '',
          category: 'IPR',
          projectTitle: '',
          projectDescription: '',
          fundingAmount: '',
          additionalInfo: '',
        });
      } else {
        console.error('Error:', result);
        alert('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form data');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Investor Funding Form</h2>
      <div className="form-group">
        <label htmlFor="profileName">Name:</label>
        <input
          type="text"
          id="profileName"
          name="profileName"
          value={formData.profileName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Select Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="IPR">IPR</option>
          <option value="Startups">Startups</option>
          <option value="Researches">Researches</option>
          <option value="Innovations">Innovations</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="projectTitle">Project Title:</label>
        <input
          type="text"
          id="projectTitle"
          name="projectTitle"
          value={formData.projectTitle}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="projectDescription">Project Description:</label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="fundingAmount">Funding Amount:</label>
        <input
          type="number"
          id="fundingAmount"
          name="fundingAmount"
          value={formData.fundingAmount}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="additionalInfo">Additional Information:</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InvestorForm;
