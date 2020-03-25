import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export const MusicContext = createContext();

const MusicContextProvider = props => {
  const [songs, setSongs] = useState([
    { title: "Why I love you", artist: "Major", id: 1 },
    { title: "Someone you loved", artist: "Lewis Capaldi", id: 2 },
    { title: "Love someone", artist: "Lukas Graham", id: 3 },
    { title: "Best part of me", artist: 'Ed Sheeran', id: 4 }
  ]);

  const addSong = (title, artist) => {
    setSongs([...songs, { title, artist, id: uuidv4() }]);
  }

  const removeSong = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  }

  return (
    <MusicContext.Provider value={{songs, addSong, removeSong}}>
      {props.children}
    </MusicContext.Provider>
  );
}

export default MusicContextProvider;
