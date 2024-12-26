import React from 'react';

const BuildingPhase = () => {
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            gap: 2em;
          }

          .info {
            text-align: left;
            width: 60%;
            font-size: 20px;
            text-align:justify;
            margin-top:5rem;
          }

          .card {
            width: 300px;
            height: 400px;
            border: 1px solid #636161;
            border-radius: 20px;
            overflow: hidden;
          }

          .card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .heading {
            text-align: center;
          }
        `}
      </style>

      <div className="heading">
        <h1>Building Phase</h1>
      </div>

      <div className="container">
        <div className="info">
          <p>
            The "build" phase is a critical step in the product development
            process, where ideas, designs, and plans are brought to life as a
            functional product or service. This phase follows the planning and
            design stages, where the groundwork has already been laid for what
            the product will be and how it should look. During the build phase,
            the focus shifts to the creation of a tangible prototype or the
            initial version of the product, incorporating both technical and
            design elements. The build phase often involves multiple teams
            working collaboratively, including design, engineering, marketing,
            sales, and quality control, ensuring that every aspect of the product
            aligns with the initial vision and market requirements.
            At the beginning of the build phase, a prototype or minimum viable
            product (MVP) is typically developed. This prototype allows for
            early-stage testing and validation, providing insights into the
            product’s functionality, user experience, and design. Feedback from
            initial testing is crucial for refining the product, and iterative
            improvements are made based on these insights. For example, user
            interface (UI) or user experience (UX) adjustments might be made, or
            the functionality of certain features may be enhanced to meet the
            user’s needs more effectively.
          </p>
          
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-website-hosting-illustration_23-2149258057.jpg?t=st=1733407792~exp=1733411392~hmac=deacf189d083ef4204b3611a863010396be8b57a54d83ec0896464c5eb785167&w=740"
            alt="Card Image"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingPhase;