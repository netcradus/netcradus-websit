import { Router } from 'express';
import { submitContact } from '../controllers/contactController.js';

const router = Router();

/**
 * @route   POST /api/v1/contact
 * @desc    Submit a new contact / consultation inquiry
 * @access  Public
 */
router.post('/contact', submitContact);

export default router;
