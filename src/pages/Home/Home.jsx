import React, { Component } from "react";
import SongList from "../../containers/SongList/SongList";
import fire from "../../config/Fire";

class Home extends Component {
  state = {
    songs: [],
    title: "",
    artist: "",
    url: "",
    poster: "",
    user: null
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.user !== nextProps.user)
      this.setState({ user: nextProps.user });
    if (this.state.songs !== nextProps.songs)
      this.setState({ songs: nextProps.songs });
  }

  componentDidUpdate(next, prev) {
    if (prev.user !== next.user) this.setState({ user: next.user });
  }

  handleNameChange = event => {
    this.setState({ title: event.target.value });
  };

  handleEstimationChange = event => {
    this.setState({ artist: event.target.value });
  };

  handleTasksChange = event => {
    this.setState({ url: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  submitSong = () => {
    if (!this.state.artist) {
      alert("Must include artist name.");
      return;
    }

    if (!this.state.title) {
      alert("Must include song title.");
      return;
    }

    if (!this.state.url.includes("www.youtube.com")) {
      alert("Must provide YouTube URL.");
      return;
    }
    const id = new Date().getTime() - 1550000000000;
    const song = {
      title: this.state.title,
      artist: this.state.artist,
      url: this.state.url,
      poster: this.state.user.displayName,
      id: id
    };
    this.setState({
      title: "",
      artist: "",
      url: ""
    });

    const dbref = fire.database().ref("/songs/" + id);
    dbref.update(song);
  };

  render() {
    return (
      <div>
        <div className="jumbotron-fluid bg-primary text-primary p-5 text-left gradient border-bottom border-primary">
          <h1 className="display-2 brand ml-md-5 ml-sm-0">NextUp</h1>
          <h2 className="header ml-md-5 ml-sm-0">Share. Like. Listen.</h2>
          {!this.state.user && (
            <p className="lead ml-md-5 ml-sm-0">
              <a
                className="btn btn-outline-primary btn-lg mt-3 header"
                href="#"
                role="button"
                onClick={this.props.signIn}
              >
                Sign-In
              </a>
            </p>
          )}
          {this.state.user && (
            <p className="lead ml-md-5 ml-sm-0">
              <a
                className="btn btn-outline-primary btn-lg mt-3 header"
                href="#"
                role="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Add Song
              </a>
              <a
                className="btn btn-outline-primary btn-lg mt-3 ml-4 header"
                href="#"
                role="button"
                onClick={this.props.signOut}
              >
                Sign Out
              </a>
            </p>
          )}
        </div>
        <SongList songs={this.state.songs} />

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title text-primary header">Add Song</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="row">
                  <div className="form-group col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      aria-describedby="name"
                      placeholder="Song Name"
                      value={this.state.title}
                      onChange={this.handleNameChange}
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="effort"
                      placeholder="Artist"
                      value={this.state.artist}
                      onChange={this.handleEstimationChange}
                    />
                  </div>
                  <div className="form-group col-12 m-0">
                    <input
                      type="text"
                      className="form-control"
                      id="task"
                      placeholder="YouTube URL"
                      value={this.state.url}
                      onChange={this.handleTasksChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-dark btn-outline-primary"
                  data-dismiss="modal"
                  onClick={this.submitSong}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
