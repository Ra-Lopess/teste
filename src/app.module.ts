import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule], // responsavel apenas pelo seu contexto, evitando poluir o codigo
  controllers: [AppController],
  providers: [AppService], // local para colocar regras de negocio
})
export class AppModule {}
