import ComicBook from '../model/ComicBook.js';

export const createComicBook = async (req, res, next) => {
  try {
    const comicBook = new ComicBook(req.body);
    const savedComicBook = await comicBook.save();
    res.status(201).json(savedComicBook);
  } catch (error) {
    next(error);
  }
};
export const getComicBooks = async (req, res, next) => {
    try {
      const { page = 1, limit = 10, sort, ...filters } = req.query;
  
      const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: sort ? JSON.parse(sort) : { createdAt: -1 },
      };
  
      const query = {};
      Object.keys(filters).forEach(key => {
        if (filters[key]) {
          query[key] = filters[key];  // This will create filter conditions
        }
      });
  
      const comicBooks = await ComicBook.paginate(query, options);
      res.json(comicBooks);
    } catch (error) {
      next(error);
    }
  };
  

export const getComicBookById = async (req, res, next) => {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook) {
      return res.status(404).json({ message: 'Comic book not found' });
    }
    res.json(comicBook);
  } catch (error) {
    next(error);
  }
};

export const updateComicBook = async (req, res, next) => {
  try {
    const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!comicBook) {
      return res.status(404).json({ message: 'Comic book not found' });
    }
    res.json(comicBook);
  } catch (error) {
    next(error);
  }
};

export const deleteComicBook = async (req, res, next) => {
  try {
    const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
    if (!comicBook) {
      return res.status(404).json({ message: 'Comic book not found' });
    }
    res.json({ message: 'Comic book deleted successfully' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const incrementUnitsSold = async (req, res) => {
  try {
    const { id } = req.params;
    const comicBook = await ComicBook.findByIdAndUpdate(id, { $inc: { unitsSold: 1 } }, { new: true });
    if (!comicBook) return res.status(404).json({ message: 'Comic book not found' });
    res.json(comicBook);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update units sold', error: err.message });
  }
};

// Add a new customer review (updated function)
export const addCustomerReview = async (req, res, next) => {
  const { rating, comment } = req.body;

  // Assuming you have user authentication, remove `customerId` if not needed
  const review = { rating, comment };

  try {
    const comicBook = await ComicBook.findById(req.params.id);
    
    if (!comicBook) {
      return res.status(404).json({ message: 'Comic book not found' });
    }

    comicBook.customerReviews.push(review);

    await comicBook.save();

    res.status(201).json(comicBook);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add review', error: err.message });
  }
};
