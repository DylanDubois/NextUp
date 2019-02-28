import React, { Component } from "react";
import "soundcloud-audio";

const SoundCloudAudio = require("soundcloud-audio");

const scPlayer = new SoundCloudAudio();

class MusicPlayer extends Component {
  state = {};

  play = () => {
    scPlayer
      .play({
        streamUrl: "https://soundcloud.com/djangodjango/first-light"
      })
      .then(res => {})
      .catch(err => console.log(err));
  };
  render() {
    return <button onClick={this.play}>PLAY</button>;
  }
}

export default MusicPlayer;
