import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {
    }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get(':id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }


    @Post()
    createTask(@Body() newTask: CreateTaskDto): Task {
        return this.tasksService.createTask(newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string): string {
        return this.tasksService.deleteTask(id);
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto): Task {
        return this.tasksService.updateTask(id, updatedFields);
    }
}
