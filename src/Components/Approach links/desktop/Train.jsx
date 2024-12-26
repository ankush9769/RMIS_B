import React from 'react';

const TrainingPhase = () => {
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            // padding: 1em;
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
        <h1>Training Phase</h1>
      </div>

      <div className="container">
        <div className="info">
          <p>
            The training phase is a crucial stage in the development and implementation
            process, ensuring that both internal teams and customers are prepared to
            effectively engage with a new product, service, or system. For internal teams,
            training equips employees across various departments—such as sales, customer
            support, and engineering—with in-depth knowledge of the product’s features,
            functionality, and troubleshooting procedures. This knowledge is vital for
            delivering exceptional customer service, driving sales, and managing the product
            effectively. For customers, the training phase focuses on providing resources
            like tutorials, onboarding sessions, and user manuals to help them understand
            how to use the product efficiently and troubleshoot common issues. In the case of
            complex products, such as software or AI-driven systems, the training phase may
            also involve machine learning models being "trained" using large datasets to
            improve performance and accuracy. This phase ensures that the product is not only
            functional but also user-friendly, making it easier for customers to adopt and
            benefit from it. Additionally, continuous training and updates are necessary as
            products evolve, new features are added, or new challenges arise.
          </p>
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/business-training-flat-icon_1284-13769.jpg?ga=GA1.1.683707051.1708259243&semt=ais_hybrid"
            alt="Card Image"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingPhase;