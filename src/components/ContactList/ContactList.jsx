import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const query = useSelector((state) => state.filters.name.toLowerCase());
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query)
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          {...contact}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
