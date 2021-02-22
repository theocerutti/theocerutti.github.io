import React from 'react';
import TextLoop from "react-text-loop";
import { Link } from 'react-router-dom';
import './Home.scss';

const suggestions = [
  "student",
  "serious",
  "backend",
  "cloud",
  "devops",
  "passionate"
]

const HomePage = () => {
  return (
    <div className="home-background" style={{ display: "flex" }}>
      <div className="has-text-centered" style={{ margin: "auto " }}>
        <div>
          <p className="home-title">I'm <span className="home-title-name">Théo Cerutti</span></p>
          <p className="home-title">A{' '}
            <TextLoop
              className="home-title-text-loop"
              children={ suggestions }
              springConfig={{ stiffness: 80, damping: 8 }}
            />
            {' '}Developer
          </p>
        </div>
        <div style={{ paddingTop: "3em" }}>
          <div className="align-home-button">
            <Link to="projects">
              <div className="home-button">View My Projects</div>
            </Link>
          </div>
        </div>
      </div>
      <a href="https://github.com/theocerutti">
        <div className="fixed-bottom github-text">
          <i className="fab fa-github"/>
          <span className="ml-4">Check my github!</span>
        </div>
      </a>
    </div>
  );
};

export default HomePage;