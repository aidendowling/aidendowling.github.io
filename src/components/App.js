import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Desktop from './Desktop';
import backgroundImage from '../assets/background.png'; // Use your existing image or update path

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;
const CustomBackground = createGlobalStyle`
  body {
    background-image: url(${props => props.backgroundImage});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

const App = () => (
  <DataContext.Provider value={dataService}>
    <ThemeProvider>
      <GlobalStyle />
      <BodyFontSizeOverride />
      <CustomBackground backgroundImage={backgroundImage} />
      <Desktop />
      <Taskbar />
    </ThemeProvider>
  </DataContext.Provider>
);
export default App;
