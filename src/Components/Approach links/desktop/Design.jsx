import React from 'react';

const DesigningPhase = () => {
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
        <h1>Designing Phase</h1>
      </div>

      <div className="container">
        <div className="info">
          <p>
            Design for a company is a holistic process that plays a critical
            role in shaping its identity, user engagement, and overall success.
            It begins with establishing a strong brand identity, including a
            distinct logo and consistent visual elements such as color schemes,
            fonts, and imagery that reflect the company's core values and
            mission. This consistency in design across all touchpoints, from
            marketing materials to digital platforms, helps build brand
            recognition and trust with customers. User experience (UX) design
            focuses on optimizing usability by ensuring that interactions with
            the company's website, apps, or products are intuitive, accessible,
            and enjoyable. It involves designing user journeys that are seamless,
            from navigation to speed and responsiveness. On the other hand, user
            interface (UI) design ensures that the visual aspects of the digital
            product—such as buttons, icons, and layout—are not only functional
            but also aesthetically pleasing. A responsive design is crucial to
            ensure that users have a consistent experience across different
            devices, whether on desktop, tablet, or mobile. Together, these
            elements of design contribute to creating a cohesive and engaging
            brand presence that attracts and retains customers while effectively
            communicating the company’s values and offering.
          </p>
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/free-photo/office-floor-plan-sketch-drawing-concept_53876-121533.jpg?ga=GA1.1.683707051.1708259243&semt=ais_hybrid"
            alt="Card Image"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default DesigningPhase;
