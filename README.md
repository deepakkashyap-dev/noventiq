# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
Running npm install in a project directory installs all the dependencies listed in the package.json file of that project. This command is typically used in Node.js projects to fetch and install the necessary packages from the npm registry

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Third Party Library 
In this App we are using :-

#### `Yup`
Yup is a JavaScript schema builder for value parsing and validation. It is commonly used for form validation in web applications, especially when working with React. Yup allows you to define a schema for your data model and provides methods to validate the data against this schema. It integrates well with form libraries like Formik to handle form validation easily.
We are using this to validate required email format in our email Input 

### `i18next and react-i18next`
i18next is a powerful internationalization library that helps you add translation support to your web applications. It supports features like pluralization, context-based translations, and interpolation.
react-i18next is a React integration for i18next, making it simple to include translations in your React components.

### `i18next-http-backend`
i18next-http-backend is a plugin for i18next that allows loading translation files from a backend server using HTTP. This is useful when you want to manage your translations dynamically and fetch them as needed rather than embedding them directly in your code.

### `i18next-browser-languagedetector`
i18next-browser-languagedetector is a plugin for i18next that automatically detects the user's language in a browser environment. It simplifies the process of determining the user's preferred language, making your internationalization setup more user-friendly and adaptive