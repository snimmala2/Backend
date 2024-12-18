import { Request, Response, NextFunction } from 'express';
import { taskSchema } from '../types/task.types';

export const validateTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    taskSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid task data' });
  }
};