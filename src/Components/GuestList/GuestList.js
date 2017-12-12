// This is just like what we did in our App.js file. Get used to this pattern of `import React, {Component} from 'react;`.
// It is a lowercase 'react because that is how it is typed in our package.json file under our `dependencies`
import React, { Component } from 'react';

export default class GuestList extends Component {
  // no need for a constrcutor because we aren't using state. Instead, we are using the props that were passed down from our App component
  render(){
    return (
      <div className='GuestList'>
        <h2>Guest List</h2>
        {/*using the handleGuesListUpdate prop*/}
        <form onSubmit={this.props.handleGuestListUpdate}>
          {/*using the guestPlaceHolder and handleNameChange prop*/}
          <input type="text" value={this.props.guestPlaceHolder} onChange={this.props.handleNameChange} />
          <button type="submit">Add Guest</button>
        </form>
        <ul>
          {/*the below code is pretty much all javascript like we have been learning. we are just mapping of the guestList prop. Be sure to always add a `key` when dynamically creating JSX elements such as here creating the <li></li> tags*/}
          {this.props.guestList.map((person, index) => <li key={index}>{person}</li>)}
        </ul>
      </div>
    )
  }
}