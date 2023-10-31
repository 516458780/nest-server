import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      entities: ['dist/modules/**/*.entity{.ts,.js}'],
      //是否自动同步实体文件,生产环境建议关闭（删除实体字段，会同步删除数据表中的列）
      synchronize: true,
      // 自动加载实体, autoLoadEntities设置为 true 的时候,NestJS 会自动加载数据库实体文件xx.entity.ts文件来创建数据表(如果没有的话)
      autoLoadEntities: true,
    }),
    ArticleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
