// DeleteBook.jsx

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/book/delete/${id}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Are you sure you want to delete this book?
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Yes
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          No
        </button>
      </div>
    </div>
  );
}
