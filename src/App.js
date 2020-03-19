import React from 'react';
import Navbar from './components/Navbar';
import MusicList from './components/MusicList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <MusicList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
