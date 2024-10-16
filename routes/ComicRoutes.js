import express from 'express';
import { check } from 'express-validator'; // Import express-validator
import { createComicBook, getComicBooks, getComicBookById, updateComicBook, deleteComicBook,incrementUnitsSold,addCustomerReview } from '../controller/ComicController.js';
import validateComicBook from '../middlewares/validateComicBoook.js'; // Custom validation middleware

const router = express.Router();

// Validation rules for creating and updating a comic book
const comicBookValidationRules = [
  check('bookName').notEmpty().withMessage('Book name is required'),
  check('authorName').notEmpty().withMessage('Author name is required'),
  check('yearOfPublication').isInt({ min: 1900 }).withMessage('Invalid year of publication'),
  check('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  check('discount').optional().isFloat({ min: 0, max: 100 }).withMessage('Discount must be between 0 and 100'),
  check('numberOfPages').isInt({ min: 1 }).withMessage('Number of pages must be a positive integer'),
  check('condition').isIn(['new', 'used']).withMessage('Condition must be either "new" or "used"'),
];

// Apply validation rules before calling the controller methods
router.post('/', comicBookValidationRules, validateComicBook, createComicBook);
router.put('/:id', comicBookValidationRules, validateComicBook, updateComicBook);

router.get('/', getComicBooks);
router.get('/:id', getComicBookById);
router.delete('/:id', deleteComicBook);
router.put('/:id/sell', incrementUnitsSold); // Route for updating unitsSold
router.post('/:id/review', addCustomerReview); // Route for adding a customer review


export default router;
