# react-app-issue-tracker

This is simple application developed by React which has following features. As a user he can create ,edit and close some issues. Charts helps the user to identify the open issues from the list of issues.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Features:

- [x] Initial Skelton and Setup of React Application.
- [x] React + Redux Integration with extension dev-tools for the app.
- [x] Initial Skelton for Components, folder structure of the App.
- [x] Creation of Issue Form and Integration with Redux , Form Validation, Saving the form to localStorage once successful.
- [x] IssueList Component changes and api integration to fetch the all the issues and inject into redux for displaying the Issues-list.
- [x] D3 Integration with IssueChart Component to display the count for Issue type.
      e.g: open-1, reopen-3 close -5 where the total issues are 9.
- [x] Jest Setup and Unit test Cases for api, utils which covers the basic features of the app.
- [x] Cypress Setup and e2e test cases for createIssue,EditPost
- [x] Code Clean up and Added PropType Validation for Components
- [x] In Develop Branch added the functionality for change of Items with Draggable feature

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Docker Build to React app

    *  docker build .
    *  docker run -p  8080:80 [container id]

COPY the container id from the first statement which docker build .
