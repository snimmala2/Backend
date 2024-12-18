import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { TaskService } from '../services/task.service';

const taskService = new TaskService();

export class TaskController {
  async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await taskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const task = await taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const task = await taskService.updateTask(req.params.id, req.body);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      await taskService.deleteTask(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }

  async toggleTask(req: Request, res: Response) {
    try {
      const task = await taskService.toggleTask(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to toggle task' });
    }
  }
}