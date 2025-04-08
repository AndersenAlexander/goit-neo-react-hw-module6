# Contact Book Application
This project is a Contact Book application built using React with Redux Toolkit for state management. The application allows users to add, search, and delete contacts, with state persisted in local storage using Redux Persist. The project is bootstrapped using Vite and styled with CSS Modules.

## Table of Contents
  - **Features**

  - **Technologies**

  - **Installation**

  - **Usage**

  - **Project Structure**

  - **Deployment**

## Design

![Screenshot 2025-04-08 162401](https://github.com/user-attachments/assets/b2d1452b-46fa-48c8-a2db-1f21f669a478)

## Project Structure
    goit-neo-react-hw-module6/
    ├── node_modules/
    ├── public/
    │   ├── AlexanderAndersen.jpg       
    │   └── favicon-[sizes].png
    ├── src/
    │   ├── components/
    │   │   ├── ContactsForm/
    │   │   │   ├── ContactsForm.jsx
    │   │   │   └── ContactsForm.module.css
    │   │   ├── ContactList/
    │   │   │   ├── ContactList.jsx
    │   │   │   └── ContactList.module.css
    │   │   └── SearchBox/
    │   │       ├── SearchBox.jsx
    │   │       └── SearchBox.module.css
    │   ├── redux/
    │   │   ├── contactsSlice.js
    │   │   ├── filtersSlice.js
    │   │   └── store.js
    │   ├── App.jsx
    │   ├── App.module.css
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── package.json
    └── vite.config.js


## License

## Features
- **Add Contact:**
Add a contact by entering a name and a number. The "Add Contact" button is styled with a black background and white text.

- **Search Contact:**
Search for contacts by name using the search input with a "Search" button. The search functionality prioritizes contacts that match the search term.

- **Delete Contact:**
Each saved contact is displayed with a "Delete" button on a red background with white text. There is a 10px gap between the contact number and the delete button.

- **Responsive Layout:**
The UI includes a header featuring the title “Contact Book” (positioned 100px from the left with a white background and black text) and a footer with the text “Design by Alexander Andersen” centered on a black background.

- **Redux State Management:**
Application state is managed with Redux Toolkit. Contacts and filters are stored in separate slices.

- **Local State Persistence:**
Contacts are persisted to local storage using Redux Persist so that the data remains available between browser sessions.

- **Built with Vite:**
The project is set up using Vite for fast development and optimized builds.

## Technologies
React

- **Redux Toolkit**

- **Redux Persist**

- **Vite**

- **DCSS Modules**

- **JavaScript**

## Installation

1. **Clone the repository:**

    ```bash
    Copiază
    git clone https://github.com/yourusername/goit-neo-react-hw-module6.git


2. **Change into the project directory:**

    ```bash
    Copiază
    cd goit-neo-react-hw-module6

3. **Install dependencies:**

    ```bash
    Copiază
    npm install


4. **Start the development server:**

    ```bash
    Copiază
    npm run dev

Your application should now be running at http://localhost:3000 (or the default port provided by Vite).

## Usage
Header & Form:

The header displays the title “Contact Book”, aligned 100px from the left.

Beneath the header, the form fields "Name" and "Number" are shown, each on its own line, with their inputs styled accordingly.

Click the "Add Contact" button to add a new contact.

## Search Section:

After a 50px vertical gap, the search section appears, containing a text input and a "Search" button.

When you enter a name and click "Search", the search term is sent to Redux, and the list is updated to display matching contacts first.

## Contact List:

Following another 50px gap, the saved contacts are listed, each with a "Delete" button (with a red background).

The contact’s number appears with a 10px gap before the delete button.
