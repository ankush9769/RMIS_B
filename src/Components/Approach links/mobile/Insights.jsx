import React from "react";

const Insights = () => {
  return (
    <div>
      <style>
        {`
          .insights-page {
            // padding: 2em;
          }

          .insights-page h1 {
            font-size: 2em;
          text-align: center;
          }

          .container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            max-width: 1000px;
            margin: 0 auto;
          }

          .info {
            flex: 1;
            // margin-right: 1em;
            font-size: 1.1em;
            text-align: justify;
          }

          .card {
            flex: 1;
            text-align: center;
          }
          .card-img {
         width: 100%;
         max-width: 450px; 
         max-height: 500px;
         border-radius: 10px;
         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
         }
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


          /* iPhone SE (max-width: 375px) */
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
          }

          /* Media query for extra small devices (max-width: 360px) */
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

      <div className="insights-page">
        <h1>Insights Phase</h1>

        <div className="container">
          <section className="info">
            <p>
              The insights phase involves gathering and analyzing critical data
              to inform decisions. It focuses on understanding user behaviors,
              market trends, and technological advancements. By leveraging
              tools such as analytics, surveys, and interviews, businesses can
              identify key pain points, opportunities, and actionable insights
              to shape strategy.must also understand the importance of security, ensuring that applications are secure from vulnerabilities. Moreover, insights into project management practices, such as Agile or Scrum, are essential to deliver projects on time and within budget. Lastly, a company should be aware of emerging technologies like AI, machine learning, and blockchain, as these are rapidly shaping the future of software and web development.This phase ensures decisions are backed by
              reliable data, minimizing risks and enhancing outcomes.
              Furthermore, detailed analysis during this phase often uncovers
              potential efficiencies and innovative solutions that can
              significantly impact overall success.
            </p>
          </section>

          <div className="card">
            <img
              src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?t=st=1733405424~exp=1733409024~hmac=432f1211dd098c415bfeaad812a5b3adabcb90fd682eb3997c8b87a872a051d9&w=900"
              alt="Illustration of growth charts"
              className="card-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
