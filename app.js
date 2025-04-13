import React from 'react';
import './App.css';

function App() {
  const skills = ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'OOP', 'Git', 'Linux'];
  const projects = [
    { name: 'FixIt AI', desc: 'AI-based clothing image generator using Stable Diffusion pipeline.' },
    { name: 'Spark Electronics', desc: 'Console-based Java project for an e-commerce platform focused on electronics.' },
    { name: 'Mood-Based Quote Generator', desc: 'A React web app that generates quotes based on the user’s mood.' }
  ];
  const certificates = [
    "Introduction to Generative AI – Google",
    "Web Development Internship – CodeClause",
    "Microsoft Learn Student Ambassador – Milestone Achieved",
    "AWS Academy Cloud Foundations"
  ];

  return (
    <div className="App">
      <header>
        <h1>Neha Srinivasan</h1>
        <p>Information Technology Student | Developer | Learner</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I'm an enthusiastic and curious IT student passionate about learning, solving problems, and building tech that matters.
          I love experimenting with web tech, creating meaningful UI/UX, and working on projects that bridge creativity and code.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>RV Institute of Technology and Management</strong><br />B.E. in Information Technology, 2022–2026</p>
        <p><strong>Narayana Junior College</strong><br />PUC (PCMC Stream), 2020–2022</p>
        <p><strong>St. Clare's Convent High School</strong><br />SSLC, 2019–2020</p>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>{skill}</div>
          ))}
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((proj, index) => (
            <div className="project" key={index}>
              <h3>{proj.name}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Certificates</h2>
        <div className="cert-list">
          {certificates.map((cert, index) => (
            <div className="cert" key={index}>{cert}</div>
          ))}
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p className="contact-link">📧 Email: <a href="mailto:nehasri1810@gmail.com">nehasri1810@gmail.com</a></p>
        <p className="contact-link">🔗 LinkedIn: <a href="https://linkedin.com/in/neha-srinivasan-0a1013242" target="_blank" rel="noreferrer">linkedin.com/in/neha-srinivasan-0a1013242</a></p>
        <p className="contact-link">💻 GitHub: <a href="https://github.com/nehasrinivasan" target="_blank" rel="noreferrer">github.com/nehasrinivasan</a></p>
      </section>
    </div>
  );
}

export default App;
