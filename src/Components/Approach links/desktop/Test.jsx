import React from 'react';

const TestingPhase = () => {
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
            width: 65%;
            font-size: 20px;
            text-align:justify;
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
        <h1>Testing Phase</h1>
      </div>

      <div className="container">
        <div className="info">
          <p>
            Testing for companies is an essential component of ensuring that
            products, services, and systems meet high-quality standards and
            deliver value to customers. It involves a series of carefully planned
            stages, beginning with functional testing to verify that all product
            features work as expected. Usability testing is conducted to identify
            design flaws and improve user experience, while performance testing
            evaluates the product’s ability to handle various loads and traffic,
            ensuring that it performs well under stress. Security testing is
            critical for identifying and addressing vulnerabilities, safeguarding
            user data, and preventing breaches. Compatibility testing ensures that
            the product functions across different devices, operating systems, and
            browsers, providing a seamless experience for all users. Regression
            testing is performed to ensure that new changes or updates don’t
            introduce issues in existing functionality. Market testing, such as beta
            testing and focus groups, provides valuable insights from real customers,
            allowing companies to fine-tune the product based on real-world feedback.
            A/B testing is often used to compare different versions of a product or
            feature, helping to identify the most effective design or marketing
            approach. Quality assurance (QA) plays a key role in detecting and
            addressing defects before the product reaches customers, and continuous
            testing throughout the development cycle helps companies quickly adapt to
            any issues.
          </p>
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/flat-design-business-planning-concept_23-2149178574.jpg?ga=GA1.1.683707051.1708259243&semt=ais_hybrid"
            alt="Card Image"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default TestingPhase;