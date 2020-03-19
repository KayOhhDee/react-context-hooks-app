import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class MusicList extends Component {

  static contextType = ThemeContext;

  render() {
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div style={{background: theme.ui, color: theme.text}} className='music-list'>
        <ul>
          <li>Perfect</li>
          <li>Afire Love</li>
          <li>Love is not a fight</li>
        </ul>
      </div>
    );
  }
}

export default MusicList;
