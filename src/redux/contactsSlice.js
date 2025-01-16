import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [], // Список контактів
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); // Додаємо новий контакт
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      ); // Видаляємо контакт за id
    },
  },
});

// Експортуємо редюсер та екшени
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
