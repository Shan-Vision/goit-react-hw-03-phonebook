import { Component } from 'react';

class Form extends Component {
  DEFAULT_STATE = {
    name: '',
  };

  state = {
    name: '',
  };
  resetForm = () => {
    this.setState({ ...this.DEFAULT_STATE });
  };

  handleNameChange = event => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handelSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({
      contact: this.state,
      onSuccessSubmit: this.resetForm,
    });

  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
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
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default Form;
