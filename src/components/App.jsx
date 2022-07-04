import { Component } from 'react';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmitForm = ({ contact, onSuccessSubmit }) => {
    const { name } = contact;
    console.log(contact);
    this.setState(state => {
      return {
        contacts: [...state.contacts, { id: shortid.generate(), name }],
      };
    });
    onSuccessSubmit();
    console.log(this.state.contacts);
    // const rightComparing = !this.state.contacts.filter(
    //   elem => elem.name.toLowerCase() === name.toLowerCase()
    // ).length;
    // this.setState(prevState => { return{ contacts: [...prevState.contacts, { id: shortid(), name }],} })
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Form onSubmit={this.handleSubmitForm} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
