// Функція-селектор для доступу до контактів
export const selectContacts = (state) => state.contacts.items;

// Функція-селектор для доступу до фільтру за ім'ям
export const selectNameFilter = (state) => state.filters.name;
