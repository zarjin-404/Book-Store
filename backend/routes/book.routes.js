import express from 'express';
const router = express.Router();
import { bookModels } from '../models/book.models.js';

router.post('/create', async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
      return res.status(400).send('At least one field is required');
    }

    const books = await bookModels.create({
      title,
      author,
      publishedYear,
    });

    return res.status(200).send(books);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const books = await bookModels.find();
    return res.status(200).send(books);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModels.findById(id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    return res.status(200).send(book);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
      return res.status(400).send('At least one field is required');
    }
    const { id } = req.params;
    const book = await bookModels.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).send(book);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModels.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    return res.status(200).send('Book deleted successfully');
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

export default router;
