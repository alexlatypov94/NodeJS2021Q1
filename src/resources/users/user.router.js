const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const user = await usersService.getUserById(req.params.userId);
  res.status(200).json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const newUser = new User({
    login: req.body.login,
    password: req.body.password,
    name: req.body.name,
  });
  const user = await usersService.createUser(newUser);
  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const currentUser = await usersService.changeUser(req.body, req.params.userId);
  res.status(200).json(User.toResponse(currentUser));
});

router.route('/:userId').delete(async (req, res) => {
  const users = await usersService.deleteUser(req.params.userId);
  res.status(204).json(users.map(User.toResponse));
});

module.exports = router;
