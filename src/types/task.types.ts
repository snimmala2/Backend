import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1).max(255),
  color: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
});

export type CreateTaskDTO = z.infer<typeof taskSchema>;
export type UpdateTaskDTO = Partial<CreateTaskDTO>;