## Overview

Root directory of the client-side source code.  The client uses React.js for UI components and Sass for 
stylesheets.

## Files

This directory contains many files.  Most of them are reusable React components used throughout the application.  The 
following sections group these files logically.

## Global Code

The first major grouping of files are those used globally throughout the application.  This includes 
Sass stylesheets, model objects, and the React application entrypoint through `index.html`.

| Filename             | Description                                                                |
|----------------------|----------------------------------------------------------------------------|
| `assets/`            | Image and Text assets used throughout the application.                     |
| `styles/`            | Stylesheets reused by components.                                          |

## React Components

The font-end application consists of many reusable React components.  React components hold HTML 
(JSX) templates, JavaScript business logic, Sass stylesheets, and sometimes application state.  
Components that hold state are class components.  Components that only contain presentation logic 
and don't maintain state are functional components.  Functional components can easily be removed 
from this application and reused elsewhere.
