const Contacts = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
};

export default Contacts;
