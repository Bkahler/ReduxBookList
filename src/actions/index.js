//selectBook is an action creator, it needs to return an action.
//The action must be an object with a 'type' property.
//Actions Typically have 2 values, a type and a payload.

export function selectBook(book){
  console.log(`A book has been selected ${book.title}`);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};
