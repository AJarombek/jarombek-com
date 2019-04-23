## Overview

Root directory of the client-side source code.  The client is written in React.js and uses Sass for 
stylesheets.

## Files

This directory contains many different files.  Most of them are reusable React components used 
throughout the application.  The following sections group these files logically.

## Global Code

The first major grouping of files are those used globally throughout the application.  This includes 
Sass stylesheets, model objects, and the React application entrypoint through `index.html`.

| Filename             | Description                                                                |
|----------------------|----------------------------------------------------------------------------|
| `assets/`            | Image and Text assets used throughout the application.                     |
| `status/`            | Status objects used for subscribing.                                       |
| `styles/`            | Stylesheets reused by components.                                          |

## React Components

The font-end application consists of many reusable React components.  React components hold HTML 
(JSX) templates, JavaScript business logic, Sass stylesheets, and sometimes application state.  
Components that hold state are class components.  Components that only contain presentation logic 
and don't maintain state are functional components.  Functional components can easily be removed 
from this application and reused elsewhere.

### Blog

| Attribute    | State  |
|--------------|--------|
| Functional   | *NO*   |
| Sass Styled  | *YES*  |

### BlogList

| Attribute    | State  |
|--------------|--------|
| Functional   | *NO*   |
| Sass Styled  | *YES*  |

### BlogPost

| Attribute    | State  |
|--------------|--------|
| Functional   | *YES*  |
| Sass Styled  | *YES*  |

### BlogPreview

| Attribute    | State  |
|--------------|--------|
| Functional   | *YES*  |
| Sass Styled  | *YES*  |

### Button

| Attribute    | State  |
|--------------|--------|
| Functional   | *YES*  |
| Sass Styled  | *YES*  |

### CodeSnippet

| Attribute    | State  |
|--------------|--------|
| Functional   | *NO*   |
| Sass Styled  | *YES*  |

### ComparisonTable

| Attribute    | State  |
|--------------|--------|
| Functional   | *YES*  |
| Sass Styled  | *YES*  |

### ComparisonTableEntry

| Attribute    | State  |
|--------------|--------|
| Functional   | *YES*  |
| Sass Styled  | *YES*  |

### Definition

| Attribute    | State  |
|--------------|--------|
| Functional   | *YES*  |
| Sass Styled  | *YES*  |

### Feature

| Attribute    | State  |
|--------------|--------|
| Functional   | *YES*  |
| Sass Styled  | *YES*  |

### FeatureList

| Attribute    | State  |
|--------------|--------|
| Functional   | *YES*  |
| Sass Styled  | *NO*   |

### Home

| Attribute    | State  |
|--------------|--------|
| Functional   | *NO*   |
| Sass Styled  | *YES*  |

### Loading

### MathNotation

### Modal

### PaginationBar

### PictureButton

### Resume

### SearchBar

### SectionTitle

### Subscribe

### Tag

### TagList

### Timeline

### TitleImage

### UpdateInfo

### Verify

### WebsiteNav

### WebsiteTemplate