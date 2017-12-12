I have put a heap of notes in the different files.

The main files you need to look at are the App.js, GuestList.js and index.js files.

If you have any questions, please reach out to me and I can clarify anything.

# VOCAB
* /node_modules folder is where our create-react-app dependencies live. We use create-react-app because it takes care of a lot of configuration for us. This is also where any packages, or bundles of code, we download from npm will live.
* The package.json file is what tells our project what dependencies our project will be using directly. If you look in the package.json file, you will see
```javascript
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.0.17"
  }
  ```
  This is the dependencies we are directly using and their version numbers
  * `this.state = {...}` this sets our initial state
  * this.setState({...}) sets new values to our state. Remember to not mutate state directly
  * props: these are named properties on our JSX that can pass data down from parent (App.js) to child (GuestList.js)

# Good to knows
* All components should be uppercase
* any custom components (components that aren't App.js) should go in a `Components` folder. Create a new folde inside for each component. See GuestList folder for example. Put all of the components business (logic, styling) inside its folder
* React has a top down data flow. Parent components can pass data down but children cannot pass data up. See our App component and GuestList component for more on this
* use `create-react-app name-of-your-app` to create a new React app
* npm start to start up your development server, generally opens on localhost:3000 unless that port is being used