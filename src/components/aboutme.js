import React from "react";

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <h1 className="about-title">About Me</h1>
        <p className="about-me">
          I'm an inquisitive problem solver who enjoys delving into error
          messages and server logs. I have a passion for software which marries
          fluid user interfaces with scalable and performant backends.
        </p>
        <p className="about-me">
          I'm a dependable teammate and patient communicator with a burning
          desire to learn and explore the unfamiliar. I have previous experience
          in analytics, consulting and finance; I also have a Masters in
          Chemical Engineering (MEng) which I studied at UCL.
        </p>
        <p className="about-me">
          Outside of work, I have interests in music, sports, architecture and
          fashion.
        </p>
      </div>
    );
  }
}

export default AboutMe;
