import React from 'react';

const Launch = () => {
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

          /* iPhone SE (320px wide) */
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

          /* Responsive for iPhone XR (414px wide) */
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
        <h1>Launching Phase</h1>
      </div>

      <div className="container">
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/flat-hand-drawn-people-starting-business-project-illustration_23-2148859980.jpg?ga=GA1.1.683707051.1708259243&semt=ais_hybrid"
            alt="Card Image"
            className="card-img"
          />
        </div>

        <div className="info">
          <p>
            The launch of a company is a multifaceted process that requires meticulous
            attention to detail across various stages. Initially, it’s important to
            establish a clear mission and vision that define the company’s purpose and
            long-term aspirations. This provides the foundation for every decision made
            within the organization and aligns the team toward a common goal. A thorough
            understanding of the market through extensive research helps the company
            identify its target audience, analyze competitors, and understand industry
            dynamics. This research is crucial for crafting a value proposition that
            resonates with potential customers, addressing their pain points, and offering
            solutions that stand out in a crowded marketplace.
            Brand development is another essential aspect of the launch. A company’s
            name, logo, and branding guidelines must reflect its core values and appeal
            to the target market. The visual identity should be consistent across all
            marketing channels, from the website to social media. Establishing a strong
            online presence is a priority, as customers often interact with the brand
            through these digital touchpoints. A well-designed website is crucial, not
            only as a digital storefront but also as a place to convey the company’s
            story, values, and product offerings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Launch;
