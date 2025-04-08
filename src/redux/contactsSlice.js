// src/redux/contactsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Export actions for dispatching
export const { addContact, deleteContact } = contactsSlice.actions;

// Selector to retrieve contacts from state
export const selectContacts = (state) => state.contacts.items;

// Default export the reducer
export default contactsSlice.reducer;
