import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Searchbox from "./components/SearchBox/Searchbox";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  const handleAddContact = (contact) => {
    setContacts(prev => [...prev, { ...contact, id: nanoid() }]);
  };

  const handleDeleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact}/>
      <Searchbox filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} handleDeleteContact={handleDeleteContact}/>
    </div>
  );
}

export default App;
