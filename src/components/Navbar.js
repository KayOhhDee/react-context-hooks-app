import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {

  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <AuthContext.Consumer>
        {authContext => {
          const {isAuthenticated, toggleAuth} = authContext;
          return (
            <nav style={{ background: theme.ui, color: theme.text }}>
              <h1>Context &amp; Hooks app</h1>
              <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged In' : 'Logged Out'}
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;