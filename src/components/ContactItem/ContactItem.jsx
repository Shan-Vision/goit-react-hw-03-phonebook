import { Item, ItemButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

function ContactItem({ name, number, onDelete }) {
  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <ItemButton onClick={onDelete}>delete</ItemButton>
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactItem;
