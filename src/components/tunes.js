import React from "react";

class Tunes extends React.Component {
  state = {};

  componentDidMount() {
    const url =
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=DerexJayy&api_key=dc7304d9d68e62db4d004b5f7977c647&format=json&limit=1";
    fetch(url)
      .then((r) => r.json())
      .then((parsed) => {
        const recenttrack = parsed.recenttracks.track[0];
        //now Playing
        let nowPlaying = false;
        if (recenttrack["@attr"]) {
          nowPlaying = recenttrack["@attr"].nowplaying ? true : false;
        }
        //artist
        const artist = recenttrack.artist["#text"];
        //name
        const name = recenttrack.name;
        let lastPlayed;
        let lastPlayedAPI;

        if (!nowPlaying) {
          lastPlayedAPI = recenttrack.date.uts;
        }

        lastPlayed = nowPlaying ? 0 : lastPlayedAPI;

        // convert the uts into something useful text wise

        let lastPlayedUnits = "null";
        if (lastPlayed) {
          lastPlayedUnits = this.timeSincePlayed(lastPlayed);
          if (
            lastPlayedUnits[0] != "0" &&
            lastPlayedUnits[0] != "1" &&
            lastPlayedUnits[1] != " "
          ) {
            lastPlayedUnits += "s";
          }
        }
        console.log(lastPlayedUnits, "lastPlayedUnits");
        //lastplayed

        console.log(nowPlaying, "nowPlaying");
        console.log(artist, "artist");
        console.log(name, "name");
        console.log(lastPlayed, "lastPlayed");

        console.log(parsed, "parsed");

        this.setState({ name, artist, nowPlaying, lastPlayedUnits });

        let tunesText = nowPlaying
          ? "Right now, I'm listening to "
          : `${lastPlayedUnits} ago, I listened to `;
        this.setState({ tunesText });
      });
  }

  timeSincePlayed = (date) => {
    const seconds = Math.floor(new Date().getTime() / 1000 - date);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) return interval + " year";

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " month";

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + " day";

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + " hour";

    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minute";

    return Math.floor(seconds) + " second";
  };

  render() {
    let tunesText = this.state.tunesText;
    let artistText = " by " + this.state.artist;
    let artist = this.state.artist;
    let name = this.state.name;
    let youTube = `https://www.youtube.com/results?search_query=${artist}+${name}`;

    return (
      <div className="tunes">
        {/* <p id="tunes">{tunesSentance}</p>; */}
        <span>{tunesText}</span>
        <span>
          <a href={youTube} target="_blank">
            {name}
          </a>
        </span>
        <span>{artistText}</span>
      </div>
    );
  }
}

export default Tunes;
