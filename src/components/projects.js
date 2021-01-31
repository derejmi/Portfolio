import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends React.Component {
  state = { activeProject: 0 };

  toggleProjects() {
    if (this.state.activeProject == 0) {
      return (
        <div className="habit-hub">
          <Card shadow={5} style={{ width: "60vw", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "450px",
                background:
                  "url(https://i.imgur.com/23fpICo.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Habit-Hub: It takes 21 days on average to form a habit! Habit-Hub
              is a full stack habit tracking app built using React, PostgreSQL
              and Node. Habit-Hub requires users to register first before being
              able to login and use its features. Habit-Hub also makes use of
              JWTs for authentication and authorisation and local storage to
              store session information. Docker is used to containerise the app.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/derejmi/HabitHub-project"
                target="_blank"
                colored
              >
                View on Github
              </Button>
              <Button colored></Button>
              <Button colored></Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeProject === 1) {
      return (
        <div className="trivia-quiz">
          <Card shadow={5} style={{ minWidth: "60vw", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "400px",
                // width: "500px",
                background:
                  "url(https://i.imgur.com/4OD0g9B.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Galaxy Brain: A galaxy-themed multiplayer trivia quiz game built
              in React. Galaxy Brain comes with a choice of over 20 trivia
              categories and 3 difficulty levels and uses the Open Trivia DB
              API. A score count is kept for all players and winner(s) are
              calcuated at the end of the game.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/derejmi/HabitHub-project"
                target="_blank"
                colored
              >
                View on Github
              </Button>
              <Button
                href="https://galaxy-brain.netlify.app/"
                target="_blank"
                colored
              >
                Try Galaxy Brain
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeProject === 2) {
      return (
        <div className="URL-Shortener">
          <Card shadow={5} style={{ minWidth: "60vw", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "400px",
                background:
                  "url(https://i.imgur.com/T2auW1o.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              A URL Shortener built in Python, Flask and SQL which uses
              Server-Side Rendering (SSR). As well as being able to shorten
              URLS, the application is also able to redirect previously
              shortened URLS stored in the database to their original sites.
              This app was built by pair-programming with a teammate and was
              inspired by older graphical user interfaces.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/derejmi/Flask-URL-Shortener"
                target="_blank"
                colored
              >
                View on Github
              </Button>
              <Button
                href="https://url-shortener-dere-tara.herokuapp.com/"
                target="_blank"
                colored
              >
                Try URL Shortener
              </Button>
              <Button colored></Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeProject === 3) {
      return (
        <div className="Anon-Journal">
          <Card shadow={5} style={{ minWidth: "60vw", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "400px",
                background:
                  "url(https://i.imgur.com/IJ22Jc0.jpg) center / cover",
              }}
            >
              Galaxy Brain
            </CardTitle>
            <CardText>
              AnonJournal: An anonymous blogging site users are able to create
              and read anonymous posts. Posts have an enforceable 200 character
              limit and can incorporate GIFs via the Giphy API. Users can react
              to submitted posts with comments and emojis, they can also see the
              metrics on how many comments and specific reactions each post
              recieves. Built with HTML, CSS and JavaScript using a JSON data
              structure for persistent storage.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/derejmi/Anonymous-Journal"
                target="_blank"
                colored
              >
                View on Github
              </Button>
              <Button colored></Button>
              <Button colored></Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeProject === 4) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "40vw", margin: "20px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background:
                  "url(https://i.imgur.com/VRXar1R.png) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Github Repo App: A React app which displays info about your Github
              repos. Uses the Github API to fetch data.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/derejmi/Lap-2-Coding-Challenge-Github-Repo-App"
                target="_blank"
                colored
              >
                View on Github
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "40vw", margin: "20px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background:
                  "url(https://i.imgur.com/NowbryM.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Google Clone - built in HTML,CSS and JavaScript</CardText>
            <CardActions border>
              <Button
                href="https://github.com/derejmi/Lap-1-Coding-Challenge-Google-Clone"
                target="_blank"
                colored
              >
                View on Github
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="projects-page">
        <div className="tabs">
          <Tabs
            activeTab={this.state.activeProject}
            onChange={(tabId) => this.setState({ activeProject: tabId })}
            ripple
          >
            <Tab>Habit Tracker</Tab>
            <Tab>Trivia Quiz</Tab>
            <Tab>URL Shortener</Tab>
            <Tab>Anonymous Blog</Tab>
            <Tab>Other Projects</Tab>
          </Tabs>
        </div>
        <div style={{ width: "80%", margin: "auto" }}>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleProjects()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
