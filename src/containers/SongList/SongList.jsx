import React from "react";
import "./SongList.scss";

const songList = props => {
  const songs = props.songs.map(song => {
    return (
      <div className="bg-primary row m-0 pt-2 text-left list-item">
        <div className="col-12">
          <h2 className="brand">
            {song.title} - {song.artist}
          </h2>
          <h5 className="header">{song.poster}</h5>
        </div>
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
