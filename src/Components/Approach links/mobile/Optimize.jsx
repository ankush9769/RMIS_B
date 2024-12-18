import React from 'react';

const Optimization = () => {
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            gap: 1em;
            flex-wrap: wrap; 
          }

          .info {
            text-align: left;
            width: 60%;
            font-size: 20px;
            text-align: justify;
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

          /*iPhone SE (320px wide) */
          @media (max-width: 375px) {
            .container {
              flex-direction: column-reverse; 
              align-items: center;
            }

            .info {
              width: 100%; 
              font-size: 16px; 
              margin-bottom: 1em; 
            }

            .card {
              width: 100%; 
              height: 250px; 
            }
          }

          /* iPad Mini (768px wide) */
          @media (max-width: 768px) {
            .container {
              flex-direction: column-reverse; 
              align-items: center;
            }

            .info {
              width: 99%; 
              font-size: 18px; 
              margin-bottom: 1em;
            }

            .card {
              width: 100%;
              height: 300px;
            }
          }

          /*iPhone XR (414px wide) */
          @media (max-width: 414px) {
            .container {
              flex-direction: column-reverse; 
              align-items: center;
            }

            .info {
              width: 100%; 
              font-size: 18px; 
              margin-bottom: 1em;
            }

            .card {
              width: 100%;
              height: 300px;
            }
          }
        `}
      </style>

      <div className="heading">
        <h1>Optimization Phase</h1>
      </div>

      <div className="container">
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148864321.jpg?ga=GA1.1.683707051.1708259243&semt=ais_hybrid"
            alt="Card Image"
            className="card-img"
          />
        </div>

        <div className="info">
          <p>
            The optimization phase is a crucial stage in the product development lifecycle
            that focuses on improving the performance, efficiency, and user experience of a
            product or service after its initial release. This phase comes after the product
            has been launched and is typically driven by feedback from users, performance
            metrics, and continuous testing. The goal of optimization is to refine the product
            to meet or exceed user expectations, address issues that arise during real-world
            use, and ensure the product performs optimally under various conditions.
            During the optimization phase, developers, product managers, and designers work
            together to analyze user feedback, monitor system performance, and identify areas
            for improvement. For software products, this could involve improving the codebase,
            reducing load times, fixing bugs, and enhancing the overall stability and security
            of the system. In physical products, optimization may focus on refining manufacturing
            processes, improving materials, or streamlining distribution to reduce costs and
            improve reliability. User experience (UX) improvements are a significant part of optimization. By
            analyzing how users interact with the product, designers can make adjustments to
            the interface, functionality, or features to ensure that the product is more intuitive
            and satisfying to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Optimization;
