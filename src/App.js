// Here we are importing the necessary files

// importing React and Component so we have access to them. Component is destructured so we can use it how we do below as opposed to class App extends React.Component {...}
import React, { Component } from 'react';
//import our css file. Notice the capitalized file name
import './App.css';
// importing our custom GuestList component. Notice the camelCase naming.
import GuestList from './Components/GuestList/GuestList';

// here we are exporting our default class App which extends Component. Extend just lets us know that we are going to use some of the Component properties inside of our App class
export default class App extends Component {
  // the constructor allows us access to the properties from Component. This is where we set up the basics,or defaults, of our App
  constructor(){
    // super() allows us to use the properties access by the constructor
    super();
    // this.state is where we actually set the default properties. These are all just initial properties and can be manipulated
    this.state = {
      name: 'Name Your Party',
      guestList: ['Sperry', 'Finn'],
      guestName: ''
    }
    // here we are binding the `this` keyword to their correct methods. This can also be done in an arrow function like this onChange={() => this.handleNameUpdate()}
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleUpdateGuestname = this.handleUpdateGuestname.bind(this);
    this.handleUpdateGuestList = this.handleUpdateGuestList.bind(this);
  }
  //method we created to update the name of our party on state
  handleNameUpdate(event){
    // the actual setting of state. Be careful of the distinction between this.state and this.setState. this.state is only used for initial setting/ this.setState is for updating state
    // `event` is the action we get for free from onChange (or onClick, onSubmit, onBlur...there are many more as well. look up action events React)
    this.setState({
      name: event.target.value
    })
  }
  handleUpdateGuestname(event){
    this.setState({
      guestName: event.target.value
    })
  }
  handleUpdateGuestList(event){
    // event.preventDefault() makes it so the form naturl behavior of submittig to a server does not happen
    event.preventDefault()
    let newGuestArray = this.state.guestList.slice()
    newGuestArray.push(this.state.guestName)
    this.setState({
      guestList: newGuestArray,
      guestName: ''
    })
  }
  // the render method is what will actually run our components code. This is run ever single time the component is `mounted` or loaded onto our virtual DOM. The virtual DOM is just a representation of the actual DOM that React uses to quickly decide what needs to be re-rendered
  render() {
    // return statement tells us what the render method should display on the screen
    return (
      // every component needs a parent div that wraps the entire contents of the component such as our <div className="App">...</div>
      // speaking of className, that is the same as doing <div class="App"></div> in regular HTML but is the `JSX` syntax
      // JSX is just the representation of you HTML in JavaScript. It also allows us to use JavaScript in our "HTML(JSX)""
      <div className="App">
        {/*Here we use a ternary to conditionally render the name of our party...Notice how our comment syntax is different in JSX? That is because we are inside of the App div, everything outside of it is JavaScript land meaning you can use regular ol' JS there.*/}
        <h1>{this.state.name ? this.state.name : `This party is wild!`}</h1>
        {/* here we are using the handleNameUpdate method we created above. notice how we use the onChange event. This means that anytime there is a change in the input, the handleNameUpdate method will fire*/}
        <input type="text" onChange={this.handleNameUpdate}/>
        {/*Below is our GuestList component we created. We create component whenever we want to separate concerns of our application. It makes sense to separate here because our guest list for our party doesn't relate to our the name of our part above. We could have just as easily moved the party name display code above into its own component and rendered it Remember, React is a top down data flow meaning we can pass data to our GuestList component but GuestList can't pass data up to our App component.*/}
        {/* Notice the `guestPlaceholder`, `guestList`, `handleNameChange` and `handleGuestListUpdate` properties, or props, on GuestList. We can call these whatever we like but we have to reference them in our GuestList component as what we name them here. Ex: accessing the date from guestPlaceHolder in our GuestList component would be done like this {this.props.guestPlaceHolder}*/}
        <GuestList guestPlaceholder={this.state.guestName} guestList={this.state.guestList} handleNameChange={this.handleUpdateGuestname} handleGuestListUpdate={this.handleUpdateGuestList}/>
      </div>
    );
  }
}
// you will often see a export default `WHATEVER YOUR COMPONENT IS NAMED` here but we saved some bytes and put it at the top where we created our class App extends Component {...}