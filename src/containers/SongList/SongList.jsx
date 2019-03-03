import React from "react";
import "./SongList.scss";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosFlame from "react-ionicons/lib/IosFlame";

const songList = props => {
  const songs = Object.keys(props.songs)
    .reverse()
    .map(songId => {
      let song = props.songs[songId];
      let likeButton = (
        <IosHeartOutline
          fontSize="30px"
          color="#FF1493"
          onClick={() => props.likeSong(song)}
        />
      );
      if (props.user && song.likes && song.likes.includes(props.user.uid)) {
        likeButton = (
          <IosHeart
            fontSize="30px"
            color="#FF1493"
            onClick={() => props.dislikeSong(song)}
          />
        );
      }
      return (
        <div
          className="bg-dark row m-0 pt-2 pb-2 text-left list-item text-primary"
          key={song.id}
        >
          <div className="col-10 col-md-11">
            <a href={song.url}>
              <h2 className="brand">
                {song.title} - {song.artist}{" "}
                {song.likes && song.likes.length >= 2 && (
                  <IosFlame fontSize="25px" color="#e27822" />
                )}
              </h2>
            </a>
            <h5 className="header">{song.poster}</h5>
          </div>
          <div className="col-2 col-md-1 text-center like-button">
            {likeButton}
            <h5 className="header">{song.likes ? song.likes.length : 0}</h5>
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
