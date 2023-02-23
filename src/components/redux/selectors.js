export const getAllContacts = store => store.contacts;
export const getFilter = store => store.filter;
export const getFilteredContacts = store => {
    const normalizeFilter = store.filter.toLowerCase().trim();
    const visiblePersons = store.contacts.filter(cont => cont.name.toLowerCase().includes(normalizeFilter));
    return visiblePersons;
};