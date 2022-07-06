import { FilterBox, FilterLabel, FilterInput } from './FilterContacts.styled';


function FilterContacts({ onChange: handleFilterChange }) {
  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput onChange={handleFilterChange} />
    </FilterBox>
  );
}

export default FilterContacts;
