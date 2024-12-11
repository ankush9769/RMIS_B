import React from 'react';

function Discovery() {
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
      <header className="heading">
        <h1>Discovery Phase</h1>
      </header>
      <div className="container">
        <section className="info">
          <p>
            The discovery phase is a critical step in various contexts, helping companies establish a strong foundation for their initiatives. In product or software development, discovery focuses on understanding the project's requirements, goals, and constraints to align expectations and create a roadmap. 
            It involves identifying the target audience, defining the project scope and deliverables, and exploring technical feasibility and risks through stakeholder interviews, market research, user journey mapping, and prototyping.
            The outcome is a clear roadmap, success metrics, and detailed requirements documentation. In legal contexts, discovery (or e-discovery) is the process of exchanging information between parties in a lawsuit to gather evidence, ensure transparency, and comply with legal obligations. 
            This involves collecting documents, conducting depositions, and reviewing electronically stored information, culminating in shared discovery responses and key evidence identification. 
            For business development, discovery revolves around researching potential clients or markets to understand their needs and craft tailored solutions.
            The discovery phase lays the foundation for project success, minimizing risks and setting a clear direction. It ensures all stakeholders are aligned before development begins.
          </p>
        </section>
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9004.jpg?t=st=1733404888~exp=1733408488~hmac=1184b8b5c25afc39042abc55b8766b830a2a22ab1ec409f6e411fb132282ea62&w=740"
            alt="Illustration of strategic consulting"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Discovery;
