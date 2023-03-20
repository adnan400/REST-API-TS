import express from 'express';

import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuth, isOner } from '../middlewares/index';
export default (router: express.Router) => {
  router.get('/users', isAuth, getAllUsers);
  router.delete('/users/:id', isAuth, isOner, deleteUser);
  router.patch('/users/:id', isAuth, isOner, updateUser);
};
