import React from 'react';

const Design = () => {
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            gap: 0.1em;
            margin: 0 auto;
          }

          .info {
            text-align: left;
            width: 50%;
            font-size: 20px;
            text-align: justify;
            margin-right: 2em; 
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
        <h1>Designing Phase</h1>
      </div>

      <div className="container">
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/people-checking-giant-check-list-background_23-2148086714.jpg?ga=GA1.1.683707051.1708259243&semt=ais_hybrid"
            alt="Card Image"
            className="card-img"
          />
        </div>

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
      </div>
    </div>
  );
};

export default Design;
