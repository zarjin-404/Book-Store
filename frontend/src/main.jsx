import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import CreateBook from './pages/CreateBook.jsx';
import EditBook from './pages/EditBook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import ShowBook from './pages/ShowBook.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/createbook" element={<CreateBook />} />
      <Route path="/editbook" element={<EditBook />} />
      <Route path="/deletebook" element={<DeleteBook />} />
      <Route path="/showbook" element={<ShowBook />} />
    </Routes>
  </BrowserRouter>
);
