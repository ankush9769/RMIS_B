import React from 'react';

const BlueprintPhase = () => {
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            gap: 1em;
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
        <h1>Blueprint Phase</h1>
      </div>

      <div className="container">
        <div className="info">
          <p>
            A company blueprint serves as a comprehensive strategic plan that
            outlines the vision, mission, core values, goals, and objectives,
            providing clear direction for growth and success. The vision defines
            the long-term aspirations and desired future state of the company,
            while the mission articulates its purpose and goals for the short to
            medium term. Core values guide decision-making, shaping the company's
            culture and behavior in interactions with employees, customers, and
            stakeholders. Business goals are categorized into short-term and
            long-term objectives, with clear metrics for success, ensuring
            alignment with strategic priorities. A thorough market analysis
            identifies the target audience, industry trends, and competitive
            landscape, enabling the company to position its products or services
            effectively. The blueprint also details the company's offerings,
            revenue model, and operational plan, including day-to-day processes,
            resource allocation, and technology integration. Financial projections,
            marketing and sales strategies, and a well-defined organizational
            structure ensure alignment across teams and clear communication of
            responsibilities. Risk management and contingency plans outline
            strategies for adapting to challenges, while plans for growth and
            expansion ensure long-term sustainability.
          </p>
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/architecture-background-design_1168-13.jpg?ga=GA1.1.683707051.1708259243&semt=ais_hybrid"
            alt="Card Image"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default BlueprintPhase;