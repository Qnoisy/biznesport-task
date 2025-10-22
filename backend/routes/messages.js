import { Router } from 'express';
import { body, param, validationResult } from 'express-validator';
import { create, list, remove, update } from '../controllers/messages.js';

const r = Router();

const handleValidation = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ success: false, errors: errors.array() });
	next();
};

r.get('/', list);

r.post(
	'/',
	body('text').isString().isLength({ min: 1, max: 500 }),
	handleValidation,
	create
);

r.put(
	'/:id',
	param('id').isInt({ min: 1 }),
	body('text').isString().isLength({ min: 1, max: 500 }),
	handleValidation,
	update
);

r.delete('/:id', param('id').isInt({ min: 1 }), handleValidation, remove);

export default r;
