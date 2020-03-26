import React, { createContext, useReducer } from 'react';
import { musicReducer } from '../reducers/musicReducers';

export const MusicContext = createContext();

const MusicContextProvider = props => {
  const [songs, dispatch] = useReducer(musicReducer, []);

  return (
    <MusicContext.Provider value={{songs, dispatch}}>
      {props.children}
    </MusicContext.Provider>
  );
}

export default MusicContextProvider;
