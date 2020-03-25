import React from 'react';
import Navbar from './components/Navbar';
import MusicList from './components/MusicList';
import ThemeContextProvider from './contexts/ThemeContext';
import MusicContextProvider from './contexts/MusicContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <MusicContextProvider>
          <Navbar />
          <MusicList />
        </MusicContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
