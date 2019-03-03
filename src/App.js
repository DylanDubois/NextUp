import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./pages/Home/Home";
import fire, { signInWithGoogle, signOut } from "./config/Fire";

class App extends Component {
  state = {
    user: {
      uid: null
    },
    songs: []
  };

  componentDidMount() {
    this.authListener();
    this.songsListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  songsListener = () => {
    const dbref = fire.database().ref("/songs/");
    dbref.on("value", snap => {
      console.log(snap.val());
      this.setState({ songs: snap.val() });
    });
  };

  render() {
    let { user, songs } = this.state;
    return (
      <div className="App">
        <Home
          signIn={signInWithGoogle}
          signOut={signOut}
          user={user}
          songs={songs}
        />
      </div>
    );
  }
}

export default App;
