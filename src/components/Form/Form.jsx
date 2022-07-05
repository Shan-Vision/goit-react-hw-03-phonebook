import { Component } from 'react';

class ContactForm extends Component {
  DEFAULT_STATE = {
    name: '',
    number: '',
  };

  state = {
    name: '',
    number: '',
  };
  resetForm = () => {
    this.setState({ ...this.DEFAULT_STATE });
  };

  handleNameChange = event => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };


  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({
      contact: this.state,
      onSuccessSubmit: this.resetForm,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            id=""
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleNameChange}
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default ContactForm;
