// src/App.jsx
import React from "react";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <h1>Contact Book</h1>
      </header>

      <div className={styles.formSection}>
        <ContactsForm />
      </div>

      <div className={styles.searchSection}>
        <SearchBox />
      </div>

      <div className={styles.contactListSection}>
        <ContactList />
      </div>

      <footer className={styles.footer}>Design by Alexander Andersen</footer>
    </div>
  );
}

export default App;
