# Countries Challenge

A simple project that shows a list of all countries with a search bar. Each country has a page with more details and the option to update de data locally.

![Home Screen](docs/screens/home.png?raw=true)
#
![Country Screen](docs/screens/country.png?raw=true)

# Features

- Show a list of all countries with their name, flag and capital.
- Search bar to filter the list of countries.
- Inner screen with more details about the country.
- Update country details and save it to the cache.

# Technologies

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [React Router](https://reactrouter.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/)
- [MaterialUI](https://pt-br.reactjs.org/)

# How to run

To run the project you need `Node.js` installed and `yarn` as a global dependecy.

Also you will need to set a enviroment varible called `REACT_APP_API_URL` as the server address.

Run  `yarn install` to install the dependencies.


With everything setup you can run the app in the development mode with `yarn start`.
The application shoud be running in [http://localhost:3000](http://localhost:3000)

To run the test suite, simply call `yarn test`

And to create a production version, use `yarn build`
The production app will be in the `build` folder, ready for deployment.
