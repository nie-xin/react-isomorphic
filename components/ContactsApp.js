import React, {Component, PropTypes} from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import fetch from 'isomorphic-fetch';

class ContactsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      filterText: ''
    };
  }

  handleUserInput(searchTerm){
    this.setState({filterText:searchTerm})
  }

  render(){
    return(
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.props.contacts}
                     filterText={this.state.filterText}/>
      </div>
    )
  }
}
ContactsApp.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object)
};

ContactsApp.requestInitialData = () => {
  return fetch('http://localhost:3000/contacts.json')
    .then((response) => response.json());
};

export default ContactsApp;
