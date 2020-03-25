import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import ThemeToggle from "./ThemeToggle";
import { MusicContext } from '../contexts/MusicContext';

const Navbar = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const {songs} = useContext(MusicContext)
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.text }}>
      <ThemeToggle />
      <h1>Songs list App</h1>
      <div>{`You have ${songs.length} in your song list`}</div>
    </nav>
  );
}

export default Navbar;
