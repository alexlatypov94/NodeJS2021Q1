const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUserById(req.params.id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const newUser = new User({
    login: req.body.login,
    password: req.body.password,
    name: req.body.name,
  });
  await usersService.createUser(newUser);

  res.json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  const currentUser = await usersService.changeUser(req.body, req.params.id);
  res.json(User.toResponse(currentUser));
});

router.route('/:id').delete(async (req, res) => {
  await usersService.deleteUser(req.params.id);
  res.status(204).send('The user has been deleted');
});

module.exports = router;
