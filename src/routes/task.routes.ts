import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';
import { validateTask } from '../middleware/validation.middleware';

const router = Router();
const taskController = new TaskController();

router.get('/', taskController.getAllTasks);
router.post('/', validateTask, taskController.createTask);
router.put('/:id', validateTask, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.patch('/:id/toggle', taskController.toggleTask);

export { router as taskRouter };