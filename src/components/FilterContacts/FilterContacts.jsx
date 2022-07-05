function FilterContacts({ onChange: handleFilterChange }) {
  return (
    <>
      <label>
        Find contacts by name
        <input onChange={handleFilterChange} />
      </label>
    </>
  );
}
export default FilterContacts;
