export const fetchBooks = async () => {
  const booksApi = [];
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/08Tm1nU2azXx78h1XJOM/books')
    .then((res) => res.json())
    .then((data) => {
      const result = Object.keys(data).map((key) => [Number(key), data[key][0]]);
      result.forEach((val) => {
        const newObj = {
          item_id: val[0],
          title: val[1].title,
          category: val[1].category,
        };
        booksApi.push(newObj);
      });
    });
  return booksApi.reverse();
};

export const saveBookToApi = async (data) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/08Tm1nU2azXx78h1XJOM/books', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  });
};

export const removeBookFromApi = async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/08Tm1nU2azXx78h1XJOM/books/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};
