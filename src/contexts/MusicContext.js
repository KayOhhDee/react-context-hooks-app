import React, { createContext, useReducer, useEffect } from 'react';
import { musicReducer } from '../reducers/musicReducers';

export const MusicContext = createContext();

const MusicContextProvider = props => {
  const [songs, dispatch] = useReducer(musicReducer, [], () => {
    const savedSongs = localStorage.getItem("rhs_app");
    return  savedSongs ? JSON.parse(savedSongs) : [] 
  });

  useEffect(() => {
    localStorage.setItem('rhs_app', JSON.stringify(songs))
  }, [songs])

  return (
    <MusicContext.Provider value={{songs, dispatch}}>
      {props.children}
    </MusicContext.Provider>
  );
}

export default MusicContextProvider;
