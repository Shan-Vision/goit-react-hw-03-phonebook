import {List,Item,ItemButton} from './Contact.styled'

function ContactList({ contacts, onDeleteId }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name}:</span>
          <span>{number}</span>
          <ItemButton onClick={() => onDeleteId(id)}>delete</ItemButton>
        </Item>
      ))}
    </List>
  );
}


export default ContactList;
