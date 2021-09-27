import React from 'react';
import propTypes from 'prop-types';

const SingleBook = ({ book }) => {
  const { title } = book;
  return (<li>{title}</li>);
};

SingleBook.propTypes = {
  book: propTypes.shape({
    title: propTypes.string,
  }),
};

SingleBook.defaultProps = {
  book: {},
};

export default SingleBook;
