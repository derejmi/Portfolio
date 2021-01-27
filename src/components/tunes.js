import React from "react";

class Tunes extends React.Component {
  state = { title: "", artist: "" };

  componentDidMount() {
    const url =
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=DerexJayy&api_key=dc7304d9d68e62db4d004b5f7977c647&format=json&limit=1";
    fetch(url)
      .then((r) => r.json())
      .then((parsed) => {
        const recenttrack = parsed.recenttracks.track[0];
        const nowPlaying = recenttrack["@attr"].nowplaying;
        const artist = recenttrack.artist["#text"];

        console.log(recenttrack, "recent");
        console.log(nowPlaying, "nowPlaying");
        console.log(artist, "artist");

        console.log(parsed, "parsed");
      });
  }

  render() {
    let tunesText = "";

    return <p>tunesText</p>;
  }
}

export default Tunes;
