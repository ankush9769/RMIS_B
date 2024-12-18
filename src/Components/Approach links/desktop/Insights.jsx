import React from 'react';

const InsightsPhase = () => {
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            justify-content:center;
            gap: 1em;
          }

          .info {
            text-align: left;
            width: 60%;
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
        <h1>Insights Phase</h1>
      </div>
      <div className="container">
        <div className="info">
          <p>
            User experience (UX) is at the core of a successful website,
            ensuring that it is easy to navigate, aesthetically pleasing, and
            responsive across all devices. The design should align with the
            brand’s identity and be visually appealing, with a layout, color
            scheme, fonts, and images that are functional. Fast loading times are
            essential to keep users engaged, and accessibility features such as
            alt text for images, screen reader compatibility, and keyboard
            navigation are necessary to accommodate all users, including those
            with disabilities. To understand how users interact with the site,
            tools like Google Analytics provide valuable insights into traffic,
            demographics, and user behavior, while heatmaps help visualize clicks
            and scroll patterns.
            Content strategy plays a pivotal role in keeping visitors engaged.
            High-quality, relevant content is crucial for providing value to
            users, whether through blog posts, product descriptions, or
            multimedia. Optimizing content for SEO is necessary for improving
            visibility on search engines and driving organic traffic, utilizing
            relevant keywords, meta descriptions, and quality backlinks.
            Conversion rate optimization (CRO) focuses on maximizing the
            effectiveness of the site by refining elements like call-to-action
            buttons, simplifying forms, reducing friction in the checkout
            process,and secure payment options.
          </p>
          
            
        </div>
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?t=st=1733405424~exp=1733409024~hmac=432f1211dd098c415bfeaad812a5b3adabcb90fd682eb3997c8b87a872a051d9&w=900"
            alt="Card Image"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default InsightsPhase;