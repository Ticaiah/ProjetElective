/** source/routes/commands.ts */
import express from 'express';
import controller from '../controllers/commandController';
import userController from '../controllers/userController';
const router = express.Router();

router.get('/commands', controller.getCommands);
router.get('/commands/:id', controller.getCommand);
router.put('/commands/:id', controller.updateCommand);
router.delete('/commands/:id', controller.deleteCommand);
router.post('/commands', controller.addCommand);


//Routes users

router.get('/users', userController.getUsers);
router.get('/users/:id', controller.getCommand);
router.put('/users/:id', controller.updateCommand);
router.delete('/users/:id', controller.deleteCommand);
router.post('/users', controller.addCommand);

export = router;