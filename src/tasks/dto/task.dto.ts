import { TaskStatus } from "../task.entity";
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description: string
}

export class UpdateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @IsOptional()
    title?: string

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @IsOptional()
    description?: string

    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    @IsNotEmpty()
    @IsOptional()
    status?: TaskStatus
}