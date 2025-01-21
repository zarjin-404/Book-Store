// ShowBook.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShowBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/book');
      const bookData = await response.json();
      console.log(bookData);
      setBooks(bookData);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-8xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Show Book</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map(book => (
          <div
            key={book._id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              {book.title}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Published Year:</strong> {book.publishedYear}
            </p>

            <div className="flex space-x-4">
              <Link to={`/book/delete/${book._id}`}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-fit transition duration-300 ease-in-out">
                  Delete
                </button>
              </Link>
              <Link to={`/book/edit/${book._id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-fit transition duration-300 ease-in-out">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
