import React from 'react';
import "./About.css"

function About() {
    document.title = "About";

    return (
        <div className="about">
            <img className="about-img" src="/static/media/lh.jpeg" alt="author"/>
            <div className="about-info">
                <h2 className="about-title">Luciano Heitt</h2>
                <h4 className="about-subtitle">Author</h4>
                <div className="about-links">
                    <a className="about-linked-in" href="https://www.linkedin.com/in/luciano-heitt/">
                        LinkedIn
                        <br />
                        <img className="linked-in-logo" src="/static/media/linkedin-logo.png" alt="linkedin logo"/>
                    </a>
                    <a className="about-github" href="https://github.com/lheitt">
                        GitHub
                        <br />
                        <img className="github-logo" src="/static/media/github-logo.png" alt="github logo"/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default About;
