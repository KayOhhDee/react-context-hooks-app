import React, { createContext, useState } from 'react';

export const MusicContext = createContext();

const MusicContextProvider = props => {
  const [songs, setSongs] = useState([
    { title: "Why I love you", artist: "Major", id: 1 },
    { title: "Someone you loved", artist: "Lewis Capaldi", id: 2 },
    { title: "Love someone", artist: "Lukas Graham", id: 3 },
    { title: "Best part of me", artist: 'Ed Sheeran', id: 4 }
  ]);
  return (
    <MusicContext.Provider value={{songs}}>
      {props.children}
    </MusicContext.Provider>
  );
}

export default MusicContextProvider;
