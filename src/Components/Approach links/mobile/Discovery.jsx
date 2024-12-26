import React from 'react';

const Discovery = () => {
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            gap: 1em;
            margin: 0 auto;
            
          }

          .info {
            text-align: left;
            width: 60%;
            font-size: 20px;
            text-align: justify;
            margin-right: 2em; 
            // margin-top:2rem;
            
          }

          .card {
            width: 300px;
            height: 400px;
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
            margin-bottom: 1em;
          }

         
          .container {
            flex-direction: row; 
          }

          .info {
            order: 1;
          }

          .card {
            order: 2; 
          }

          /*iPad Mini (max-width: 768px) */
          @media (max-width: 768px) {
            .container {
              flex-direction: column;
              text-align: center;
            }

            .info {
              width: 100%; 
              font-size: 16px;
              margin-bottom: 1em;
              order: 2; 
            }

            .card {
              width: 100%; 
              height: 300px; 
              margin-bottom: 1em; 
              order: 1; 
            }

            .card-img {
              max-height: 300px; 
            }
          }

          /*iPhone SE (max-width: 375px) */
          @media (max-width: 375px) {
            .container {
              flex-direction: column; 
              text-align: center;
            }

            .info {
              width: 100%; 
              font-size: 14px; 
              margin-bottom: 1em; 
              order: 2; 
            }

            .card {
              width: 100%; 
              height: 250px; 
              margin-bottom: 1em; 
              order: 1; 
            }

            .card-img {
              max-height: 250px; 
          }

          /*small devices (max-width: 360px) */
          @media (max-width: 360px) {
            .container {
              flex-direction: column; 
              text-align: center;
            }

            .info {
              width: 100%; 
              font-size: 14px;
              margin-bottom: 1em;
              order: 2; 
            }

            .card {
              width: 100%; 
              height: 250px; 
              margin-bottom: 1em; 
              order: 1; 
            }

            .card-img {
              max-height: 250px; 
            }
          }
        `}
      </style>

      <div className="heading">
        <h1>Discovery Phase</h1>
      </div>

      <div className="container">
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/businesspeople-office_24908-56706.jpg?ga=GA1.1.683707051.1708259243&semt=ais_hybrid"
            alt="Card Image"
            className="card-img"
          />
        </div>

        <div className="info">
          <p>
            The Discovery phase is a critical step in any project, where the
            foundation for success is laid. During this phase, the primary goal is
            to gather essential information, define the scope, and establish
            clear goals. This includes conducting research, analyzing market
            trends, and identifying the target audience's needs. Additionally,
            stakeholders and team members collaborate to understand the
            project’s objectives and constraints. A thorough understanding of
            both the technical and business requirements is essential for
            creating a plan that aligns with the project's goals. The Discovery
            phase typically results in a roadmap that outlines the project's
            direction, a detailed timeline, and a clear understanding of the
            resources required for successful completion. It ensures that all
            involved parties have a shared vision, and it sets the stage for
            the subsequent phases of development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
