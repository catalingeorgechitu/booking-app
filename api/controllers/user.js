import User from '../models/User.js';

// UPDATE
export const updateUser = async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (error) {
		next(error);
	}
};

// DELETE
export const deleteUser = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res
			.status(200)
			.json(`User with the id of ${req.params.id} has been deleted`);
	} catch (error) {
		next(error);
	}
};

// GET
export const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};

// GET ALL
export const getUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};
