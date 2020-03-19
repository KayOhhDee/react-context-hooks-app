import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class MusicList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              style={{ background: theme.bgcolor, color: theme.text }}
              className="music-list"
            >
              <ul>
                <li style={{ background: theme.ui }}>Perfect</li>
                <li style={{ background: theme.ui }}>Afire Love</li>
                <li style={{ background: theme.ui }}>Love is not a fight</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default MusicList;
