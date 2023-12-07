import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {


    private tasks: Task[] = [
        {
            id: '1',
            title: 'First task',
            description: 'some task',
            status: TaskStatus.PENDING
        }
    ]

    getAllTasks(): Task[] {
        return this.tasks;
    }


    createTask(title: string, description: string): Task {
        const newTask = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(newTask);
        return newTask;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    updateTask(id: string, updatedFields: UpdateTaskDto): Task {
        let updatedTask = null;
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                updatedTask = Object.assign(task, updatedFields);
                task = updatedTask;
            }
            return task;
        });
        return updatedTask;
    }

    deleteTask(id: string): string {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return 'Record deleted successfully.';
    }
}
