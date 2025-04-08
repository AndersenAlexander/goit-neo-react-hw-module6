// src/components/ContactList/ContactList.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter).toLowerCase();
  const dispatch = useDispatch();

  const sortedContacts = contacts.slice().sort((a, b) => {
    const aMatch = a.name.toLowerCase().includes(filter);
    const bMatch = b.name.toLowerCase().includes(filter);
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    return 0;
  });

  return (
    <ul className={styles.list}>
      {sortedContacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <span className={styles.contactInfo}>
            {contact.name}: {contact.number}
          </span>
          <button
            className={styles.deleteButton}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
