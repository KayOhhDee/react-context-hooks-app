import React, { useContext, useState } from "react";
import { MusicContext } from "../contexts/MusicContext";
import { ThemeContext } from "../contexts/ThemeContext";

const MusicForm = () => {
  const { dispatch } = useContext(MusicContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const theme = isLightTheme ? light : dark;

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_SONG', song: {title, artist}})
    setTitle("");
    setArtist("");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        style={{
          background: theme.inputbg,
          color: theme.text,
          borderColor: theme.text
        }}
        value={title}
        type="text"
        placeholder="Song"
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        style={{
          background: theme.inputbg,
          color: theme.text,
          borderColor: theme.text
        }}
        value={artist}
        type="text"
        placeholder="Artist"
        onChange={e => setArtist(e.target.value)}
        required
      />
      <input
        style={{
          background: theme.inputbg,
          color: theme.text,
          borderColor: theme.text
        }}
        type="submit"
      />
    </form>
  );
};

export default MusicForm;
