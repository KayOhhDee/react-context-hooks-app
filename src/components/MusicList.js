import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { MusicContext } from '../contexts/MusicContext';

const MusicList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const {songs} = useContext(MusicContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{ background: theme.bgcolor, color: theme.text }}
      className="music-list"
    >
      <ul>
        {songs.map(song => <li key={song.id} style={{ background: theme.ui }}>{song.title}<span>Song by:&nbsp;{song.artist}</span></li>)}
      </ul>
    </div>
  );
}

export default MusicList;
