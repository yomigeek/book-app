import db from '../models/index';

export default class UserController {
  static createBook(req, res) {
    return db.book
      .findById(parseInt(req.params.bookId, 10))
      .then(
        (book) => {
          if (!book) return res.status(404).json({ status: 'failed', message: 'Book not found' });
          return book.update(
            {
              title: req.body.title,
              author: req.body.author,
              publisher: req.body.publisher,
            },
          )
            .then(updatedBook => res.status(200).json({ status: 'success', message: 'Book Succesfully Updated', data: { updatedBook } }))
            .catch(error => res.status(500).json(error));
        },
      )
      .catch(error => res.status(500).json(error));
  }
}
