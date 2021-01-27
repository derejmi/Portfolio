import React from "react";
import { Grid, Cell } from "react-mdl";
import Tunes from "./tunes";

class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }} id="main-area">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://drive.google.com/uc?export=view&id=1oanEgszKTVNeHcm1dZf8pXQY8E6sjr2I"
              alt="animated-me"
              className="animated-img"
            />

            <div className="banner-text">
              <h1>Deré Jemireyigbe</h1>
              <h2>Software Engineer</h2>
              <div className="social-links">
                {/* Github */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Spotify*/}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-spotify" aria-hidden="true" />
                </a>

                {/* Gmail*/}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </div>
            </div>
            <Tunes />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
