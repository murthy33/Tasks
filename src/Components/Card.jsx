import React from 'react';
import '../Styles/Card.css';

const Card = ({ selectedImage, Name, Dept }) => {
  return (<>
    <div className="card">
      <div className="details">
        <img src={selectedImage} alt="profile" className="profile" />
        <div className="about">
          <h3 className='name'>{Name}</h3>
          <p className='dept'>{Dept}</p>
        </div>
      </div>

      <div className="percent-labels">
        <span style={{ width: "48%" }}>48%</span>
        <span style={{ width: "32%" }}>32%</span>
        <span style={{ width: "20%" }}>20%</span>
      </div>

      <div className="progress-bar">
        <div className="productive" style={{ width: "48%" }}></div>
        <div className="neutral-blue" style={{ width: "32%" }}></div>
        <div className="neutral-orange" style={{ width: "20%" }}></div>
      </div>

      <div className="legend">
        <div><span className="dot productive"></span> Productive</div>
        <div><span className="dot neutral-blue"></span> Nutral</div>
        <div><span className="dot neutral-orange"></span> Nutral</div>
      </div>
    </div>
    <div className='date'>
      <span className='due-date'>Due Date:  20 Apr 2025</span>
    </div>
    </>
  );
};

export default Card;
