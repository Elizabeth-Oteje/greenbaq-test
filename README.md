# Landing Page

This project is an **Landing Page Website** built with **React** and
**Bootstrap**. The application provides detailed information about the company.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Build for Production](#build-for-production)

---

## Features

- **Landing Page**: Shows all the need-to-know about the company.

---

## Tech Stack

- **React**: Frontend JavaScript library for building user interfaces.
- **Bootstrap**: CSS framework for better styling structure.
- **React Router**: For routing and navigation between application pages.

## Project Structure

The following folder structure is used to keep the codebase modular and
maintainable:

```
|--- MY-APP/
├── .vscode/ # Editor settings
├── public/ # Static assets
├── src/
│ ├── assets/ # Images and static files
│ ├── components/ # Reusable components(e.g., Footer, Navbar)
│ ├── pages/ # Main application pages
│ │ ├── Home/ # Landing page
│ ├── App.js # Main application component
│ ├── index.js # Application entry point
│ ├── index.css/ # Global styles
├── .prettierrc # Code formatting
```

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v22.5.1)
- **npm**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Elizabeth-Oteje/greenbaq-test.git
   cd greenbaq-test
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or if you prefer `yarn`:

   ```bash
   yarn install
   ```

### Running the App

To start the development server, run:

```bash
npm start
```

or with `yarn`:

```bash
yarn start
```

The app will be running at [http://localhost:3000](http://localhost:3000).

### Build for Production

To build the app for production:

```bash
npm run build
```

This will create an optimized build in the `build` folder, ready for deployment.

---
