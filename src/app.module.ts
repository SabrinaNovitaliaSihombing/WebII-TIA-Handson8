import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MhsController } from './mhs/mhs.controller';
import { LoggerMiddleware } from './logger.middleware';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { MhsModule } from './mhs/mhs.module';

@Module({
  imports: [MhsModule],
  controllers: [AppController, MhsController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
})
export class AppModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs');
  }
}
