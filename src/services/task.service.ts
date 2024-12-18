import { prisma } from '../lib/prisma';
import { CreateTaskDTO, UpdateTaskDTO } from '../types/task.types';

export class TaskService {
  async getAllTasks() {
    return prisma.task.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  async createTask(data: CreateTaskDTO) {
    return prisma.task.create({
      data
    });
  }

  async updateTask(id: string, data: UpdateTaskDTO) {
    return prisma.task.update({
      where: { id },
      data
    });
  }

  async deleteTask(id: string) {
    return prisma.task.delete({
      where: { id }
    });
  }

  async toggleTask(id: string) {
    const task = await prisma.task.findUnique({
      where: { id }
    });

    if (!task) return null;

    return prisma.task.update({
      where: { id },
      data: { completed: !task.completed }
    });
  }
}