const Searchbox = ({ filter, setFilter }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        type="text"
        placeholder="Enter name"
      />
    </div>
  );
};

export default Searchbox;
