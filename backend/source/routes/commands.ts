/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/commands';
const router = express.Router();

router.get('/commands', controller.getCommands);
router.get('/commands/:id', controller.getCommand);
router.put('/commands/:id', controller.updateCommand);
router.delete('/commands/:id', controller.deleteCommand);
router.post('/commands', controller.addCommand);

export = router;