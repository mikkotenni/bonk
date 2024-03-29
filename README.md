# Bonk

Even if the term bonk does have multiple meanings, this application refers to bonk as a imaginary
apparatus that is seamingly appropriate but really does nothing - it's completely function-free!
[Bonk Business Inc.](https://en.wikipedia.org/wiki/Bonk_Business) is a buzzing corporation based on
this idea.

Bonk application allows you to upkeep your own bonk gadget collection.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Packages, libraries and frameworks

### `TanStack Query`

TanStack Query, previously known as React Query, is a powerful set of hooks for fetching, caching, synchronizing, and updating
asynchronous data in React applications. It is a library designed to make handling asynchronous data operations more efficient
and to reduce the amount of boilerplate code developers need to write for these tasks.

Instead of locally managed state, this application relies on server state. It suits well the application characteristics
and herds business logic to server side.

### `json-server`

It is a simple package that allows you to set up a fake REST API with zero coding in a matter of seconds. It's based on a JSON file
that acts as a database for your mock data. You can use it for prototyping, testing, and quickly bootstrapping ideas without the
need to set up a complex backend.

Good partner for TanStack Query in this application and an excellent way to support independent frontend development
environment in general.

### `styled-components`

Styled-components is a library for React and React Native that allows developers to use component-level styles in their applications
using tagged template literals. This approach enables writing CSS code in JavaScript files, facilitating the management of styles
based on the application's state or props. Styled-components embraces the component-based architecture of React, allowing for a
more seamless and powerful integration of styles into JavaScript.

While still maintaining a single `index.css` for the very most global style declarations, majority of CSS is scoped in components.

## Available Scripts

In the project directory, you can run:

### `npm run server`

Runs fake REST API in port 3001 with mock data.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
