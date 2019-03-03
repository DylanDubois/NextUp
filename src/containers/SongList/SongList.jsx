import React from "react";
import "./SongList.scss";

const songList = props => {
  const songs = Object.keys(props.songs)
    .reverse()
    .map(songId => {
      let song = props.songs[songId];
      let likeButton = (
        <button onClick={() => props.likeSong(song)}>LIKE</button>
      );
      if (props.user && song.likes.includes(props.user.uid)) {
        likeButton = (
          <button onClick={() => props.dislikeSong(song)}>DISLIKE</button>
        );
      }
      return (
        <div
          className="bg-dark row m-0 pt-2 text-left list-item text-primary"
          key={song.id}
        >
          <div className="col-11">
            <a href={song.url}>
              <h2 className="brand">
                {song.title} - {song.artist}
              </h2>
            </a>
            <h5 className="header">{song.poster}</h5>
          </div>
          <div className="col-1">{likeButton}</div>
        </div>
      );
    });
  return (
    <div className="bg-dark max-height SongList">
      <div className="list">{songs}</div>
    </div>
  );
};

export default songList;
