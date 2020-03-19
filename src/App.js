import React from 'react';
import Navbar from './components/Navbar';
import MusicList from './components/MusicList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <MusicList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
