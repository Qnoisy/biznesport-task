import sequelize from '../utils/database.js';

export const list = async (_req, res, next) => {
	try {
		const { Message } = sequelize.models;
		const rows = await Message.findAll({ order: [['id', 'DESC']] });
		res.json({ success: true, data: rows });
	} catch (e) {
		next(e);
	}
};

export const create = async (req, res, next) => {
	try {
		const { Message } = sequelize.models;
		const item = await Message.create({ text: req.body.text });
		res.status(201).json({ success: true, data: item });
	} catch (e) {
		next(e);
	}
};

export const update = async (req, res, next) => {
	try {
		const { Message } = sequelize.models;
		const id = Number(req.params.id);
		const [n] = await Message.update(
			{ text: req.body.text },
			{ where: { id } }
		);
		if (!n)
			return res.status(404).json({ success: false, message: 'Not found' });
		const item = await Message.findByPk(id);
		res.json({ success: true, data: item });
	} catch (e) {
		next(e);
	}
};

export const remove = async (req, res, next) => {
	try {
		const { Message } = sequelize.models;
		const id = Number(req.params.id);
		const n = await Message.destroy({ where: { id } });
		if (!n)
			return res.status(404).json({ success: false, message: 'Not found' });
		res.json({ success: true });
	} catch (e) {
		next(e);
	}
};
