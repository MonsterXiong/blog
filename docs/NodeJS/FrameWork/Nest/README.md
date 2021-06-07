# Nest

## 安装

```javascript
// 安装
npm i -g @nestjs/cli
// 创建项目
nest new project-name
// 启动项目
cd project-name && npm run start
```

## 使用 CLi 创建 controller

```javascript
nest g controller controller-name
```

## 使用 CLi 创建 service

```javascript
nest g service service-name
```

## 调整目录结构

```
@nestjs/common =>Module,Controller, Get, Query, Post, Body, Patch, Param, Delete,Injectable
```

## 控制器

**控制器负责处理传入的请求和向客户端返回响应。**

控制器的目的是接收应用的特定请求。路由机制控制哪个控制器接收哪些请求。通常，每个控制器有多个路由，不同的路由可以执行不同的操作。

为了创建一个基本的控制器，我们使用类和装饰器。装饰器将类和所需元数据相关联，并使 Nest 能够创建路由映射（将请求绑定到想相应的控制器）。

1. 创建 cats 文件夹并创建 cats.controller.ts 文件

```
import {Controller,Get} from '@nestjs/common'

//使用控制器所需的@Controller()装饰器，可选前缀设置为cats。在@Controller()装饰器中使用路径前缀可以使我们轻松地对一组相关的路由进行分组，并最大程度地减少重复代码，减少每个路由重复路径的那部分。
@Controller('cats')
export class CatsController {
	@Get()
	findAll():string{
		return "this action returns all cats"
	}
}

使用CLI创建控制器，只需执行nest g controller cats命令

findAll()方法之前的@Get()HTTP请求方法装饰器告诉Nest为HTTP请求的特定端点创建处理程序.端点对应于HTTP请求方法（GET）和路由。什么是路由 ？ 处理程序的路由是通过连接为控制器声明的（可选）前缀和请求装饰器中指定的任何路由来确定的。路由包括可选的控制器路由前缀和请求方法装饰器中声明的任何路由
```

## 集成 swagger api 文档

```javascript
1.npm i --save @nestjs/swagger swagger-ui-express
2.在main.ts文件，导入 import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
3.在main.ts文件，监听端口之前，设置swagger文档相关配置
const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-starter api document')
    .setDescription('nest starter project api document')
    .setVersion('1.0')
    .addBasicAuth()
    .build()
  const document = SwaggerModule.createDocument(app, swaggerOptions)
  SwaggerModule.setup('doc', app, document) // =>'doc'为访问路径

 4.npm run start && 访问localhost:300/doc
```

### 细化 swagger

```javascript
1. npm i --save class-validator
2. 在hello文件夹下创建classes文件夹以及hello.ts文件，并写入
import { ApiProperty } from '@nestjs/swagger'

export enum UserRole {
  Admin = 'Admin',
  User = 'User'
}

export class Hello {
  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  name: string

  @ApiProperty({ example: 1, description: 'The age of Cat' })
  age: number

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat'
  })
  breed: string

  @ApiProperty({ enum: UserRole })
  role: UserRole
}
3. 在hello文件夹下创建dto文件夹以及在该文件夹内新建create-hello.dto.ts文件并写入
import { IsInt, IsString } from 'class-validator'

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string
}
4.修改controller=>
import { ApiQuery, ApiResponse, ApiBearerAuth, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { Hello, UserRole } from './classes/hello'
```

## 自定义 logger 中间件

```javascript
新建loggerMiddleware.ts文件;
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): any {
    const { method, path } = req;
    console.log(`${method} ${path}`);
    next();
  }
}
在主模块中引用;
import { Module, RequestMethod, MiddlewareConsumer } from "@nestjs/common";
import { HelloModule } from "./modules/hello/hello.module";
import { LoggerMiddleware } from "./common/middleware/logger.middleware";
@Module({
  imports: [HelloModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: "hello", method: RequestMethod.POST })
      .forRoutes("hello");
  }
}
```
