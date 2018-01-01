import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContactList extends React.Component {
  render() {
    const people = [{ name: 'Michael' }, { name: 'Ryan' }, { name: 'Tyler' }];

    return <ol>{people.map(person => <li key={person.name}>{person.name}</li>)}</ol>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
