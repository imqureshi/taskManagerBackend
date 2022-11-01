import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TodosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, TodosService],
})
export class AppModule {}
