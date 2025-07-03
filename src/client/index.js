/**
 * The Entry point for the React.js application
 * @author Andrew Jarombek
 * @since 3/19/2018
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@babel/polyfill';
import { createGlobalStyle } from 'styled-components';

import Home from './Home';
import Blog from './Blog';
import gs from './globalStyles';
import BlogList from './BlogList';
import Resume from './Resume';
import Statistics from './Statistics';

let globalStyles = '';

if (process.env.NODE_ENV === 'development') {
  globalStyles = gs.dev;
} else {
  globalStyles = gs.prod;
}

window.React = React;

const RoutedApp = () => {
  const GlobalStyle = createGlobalStyle`${globalStyles}`;

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog/:name" element={<Blog />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/stats" element={<Statistics />} />
          <Route element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RoutedApp />);

export default RoutedApp;
