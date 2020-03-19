import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {text: '#555', ui: '#ddd', bgcolor: '#eee'},
    dark: {text: '#ddd', ui: '#333', bgcolor: '#555'}
  }

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        isLightTheme: !prevState.isLightTheme
      }
    })
  }
  
  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

