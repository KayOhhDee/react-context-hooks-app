import React, { createContext, useState } from 'react';

export const MusicContext = createContext();

const MusicContextProvider = props => {
  const [songs, setSongs] = useState([
    {title: 'Why I love you', id: 1},
    {title: 'Someone you loved', id: 2},
    {title: 'Love someone', id: 3},
    {title: 'Best part of me', id: 4}
  ])
  return (
    <MusicContext.Provider value={{songs}}>
      {props.children}
    </MusicContext.Provider>
  );
}

export default MusicContextProvider;
