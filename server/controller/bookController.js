import db from '../models/index';
import { validateParams } from '../helper/validate';


export default class bookController {
  static updateBook(req, res) {
    const { error } = validateParams(req.params);
    if (error) {
      res.status(400).json({
        Error: error.details[0].message.replace('"', '').replace('"', ''),
        status: 'success',
      });
      return;
    }
    db.book
      .findById(parseInt(req.params.bookId, 10))
      .then(
        (book) => {
          if (!book) return res.status(404).json({ status: 'failed', message: 'Book not found' });
          // const newBook = {
          //   title: req.body.title || 'book.title',
          //   author: req.body.author || book.author,
          //   publisher: req.body.publisher || 'book.publisher',
          // };
          return book.update(req.body, { fields: Object.keys(req.body) })
            .then(updatedBook => res.status(200).json({ status: 'success', message: 'Book Succesfully Updated', data: { book: updatedBook } }))
            .catch(err => res.status(500).json(err));
        },
      )
      .catch(err => res.status(500).json(err));
  }
}
