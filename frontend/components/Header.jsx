import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="w-full h-20 flex justify-between items-center space-x-6">
        <h1 className="text-3xl font-semibold">Book Store</h1>
        <li className="list-none">
          <Link to="/book/create" className="font-bold">
            Add Book
          </Link>
        </li>
      </div>
    </>
  );
}
