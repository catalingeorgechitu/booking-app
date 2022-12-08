import express from 'express';
import {
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauth', verifyToken, (req, res, next) => {
// 	res.send('You have successfully logged in!');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
// 	res.send('Hi user, you have successfully logged in!');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
// 	res.send('Hi admin, you have successfully logged in!');
// });

// UPDATE
router.put('/:id', verifyUser, updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

// GET
router.get('/:id', verifyUser, getUser);

// GET ALL
router.get('/', verifyAdmin, getUsers);

export default router;
