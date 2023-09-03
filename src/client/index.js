/**
 * The Entry point for the React.js application
 * @author Andrew Jarombek
 * @since 3/19/2018
 */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@babel/polyfill';
import { createGlobalStyle } from 'styled-components';

import Home from './Home';
import Blog from './Blog';
import Verify from './Verify';
import Unsub from './Unsub';
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
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog/:name" element={<Blog {...window.__STATE__} />} />
        <Route path="/blog" element={<BlogList {...window.__STATE__} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/stats" element={<Statistics />} />
        <Route path="/verify/:code" element={<Verify />} />
        <Route path="/unsub/:code" element={<Unsub />} />
        <Route element={<Home />} />
        <GlobalStyle />
      </Routes>
    </Router>
  );
};

render(<RoutedApp />, document.getElementById('react-container'));

export default RoutedApp;
