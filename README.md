# ApiMockClent

apiMock 后台管理客户端

## 服务端

koa2+mysql: [apiMockService](https://github.com/zkeyword/apiMockServer)

## 相关命令

    npm install -g @angular/cli@latest

    npm start or ng serve

    ng build

    ng test

    ng e2e

    ng generate component component-name 
        // (ng generate directive|pipe|service|class|guard|interface|enum|module)

    ng g c component-name

## 目录结构


    / 根目录
    |__ e2e 测试目录
    |__ src 前端开发目录
    |   |__ app 业务目录
    |   |  |__ components 组件目录
    |   |  |__ modules 模块目录
    |   |  |__ service 服务目录
    |   |  |__ app-routing.module.ts 路由
    |   |  |__ app.component.ts app组件
    |   |  |__ app.module.ts app模块
    |   |  |__ app.service.ts app服务
    |   |  |__ selective-preloading-strategy.ts 预加载策略
    |   |__ environments 环境变量配置
    |   |__ assets 静态目录
    |   |__ environments 环境变量配置
    |   |__ app.js 应用入口文件
    |__ angular-cli.json angular-cli 配置
    |__ karma.conf.js karma.js 配置
    |__ protractor.conf.js Jasmine 配置
    |__ tsconfig.json ts配置
    |__ tslint.json ts检查配置