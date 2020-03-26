import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { MusicContext } from "../contexts/MusicContext";
import MusicForm from "./MusicForm";

const MusicList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { songs, dispatch } = useContext(MusicContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{ background: theme.bgcolor, color: theme.text }}
      className="music-list"
    >
    {songs.length ? 
      <ul>
        {songs.map(song => (
          <li key={song.id} style={{ background: theme.ui }}>
            {song.title}
            <span>Song by:&nbsp;{song.artist}</span>
            <i onClick={() => dispatch({type: 'REMOVE_SONG', id: song.id})} className="fa fa-trash-o" aria-hidden="true"></i>
          </li>
        ))}
      </ul> : <div>You have no songs available.</div>
    }
      <MusicForm />
    </div>
  );
};

export default MusicList;
