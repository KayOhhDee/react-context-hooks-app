import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

const MusicList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{ background: theme.bgcolor, color: theme.text }}
      className="music-list"
    >
      <ul>
        <li style={{ background: theme.ui }}>Perfect</li>
        <li style={{ background: theme.ui }}>Afire Love</li>
        <li style={{ background: theme.ui }}>Love is not a fight</li>
      </ul>
    </div>
  );
}

export default MusicList;
