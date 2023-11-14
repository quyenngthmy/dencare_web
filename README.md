# Dencare web

A dental introduction website includes a home page, introduction page, blog page, detailed blog page, and contact page. The website has features like booking schedule, slides

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)

## Getting Started

### Prerequisites

Make sure you have the following software installed before proceeding:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
```
git clone https://github.com/quyenngthmy/dencare_web.git
```
2. Navigate to the project directory:
```
cd source
```
3. Install dependencies:
```
npm install
```

### Scripts
List and explain the available npm scripts:

Start the development server:
```
npm start
```
Build the project for production:
```
npm run build
```
Run tests:
```
npm test
```
### Folder Structure
Explain the purpose of each important folder in your project.
```
├── /build/                  # Compiled files (not included in the repository)
├── /src/                   # Source code
│   ├── /assets/            # Static assets
│   ├── /components/        # React components
│   ├── index.scss          # Stylesheets
│   ├── index.html          # HTML template
│   ├── index.js            # Entry point
├── .babelrc                # Babel configuration
├── webpack.config.js       # Webpack configuration
└── package.json            # NPM package configuration
```
