import React from "react";
import "./SongList.scss";

const songList = props => {
  const songs = Object.keys(props.songs)
    .reverse()
    .map(songId => {
      let song = props.songs[songId];
      return (
        <a
          className="bg-dark row m-0 pt-2 text-left list-item text-primary"
          key={song.id}
          href={song.url}
        >
          <div className="col-12">
            <h2 className="brand">
              {song.title} - {song.artist}
            </h2>
            <h5 className="header">{song.poster}</h5>
          </div>
        </a>
      );
    });
  return (
    <div className="bg-dark max-height SongList">
      <div className="list">{songs}</div>
    </div>
  );
};

export default songList;
