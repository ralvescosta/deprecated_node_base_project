# NodeJs Base Project

![node-current](https://img.shields.io/badge/node-14.17.4-brightgreen.svg)

## Contents
- [GoLang Base Project](#golang-base-project)
  - [Contents](#contents)
  - [Resume](#resume)
  - [Project Structure](#project-structure)
  - [Installation](#installation)

## Resume

This project was created to be the base project for future projects. Based in Clean Architecture, this project have 5 layers: **Business**, **Application**, **Interfaces**, **Infrastructure**, **Shared**. Following the Clean Arch dependency diagram.

<div align=center>
<image src="./docs/CleanArchitecture.jpg" width=450, height=350>
</div>

- The **Business Layer**  is responsible to our business logic, entities and DTO's.

- The **Application Layer** is responsible to handle with our business and orquestraste the external calls if necessary.

- The **Interfaces Layer** is responsible to the presentation resources in our application.

- The **Infrastructure Layer** is responsible to handle with external calls and external packages.

- The **Shared Layer** contains pkgs that are shared in more than one layer.

## Project Structure

```
|      
│   └── src
|       ├── applications        
│       │   └── errors
│       │       └── *_error.ts
│       │   └── interfaces
│       │       └── i_*.ts
│       │   └── usecase
│       │       └── _usecase.ts
│       │
│       ├── business
│       │   └── dtos
│       │       └── *_dto.ts
│       │   └── entities
│       │       └── *.ts
│       │   └── usecases
│       │       └── i_*_usecase.ts
│       │
│       ├── infrastructure
│       │   └── adapters
│       │       └── *_adapt.ts
│       │   └── database
│       │       └── migrations
│       │           └── *.js
│       │       └── models
│       │           └── *_model.js
│       │       └── seeders
│       │           └── *_seeder.js
│       │       └── connection.ts
│       │       └── sequelize.js
│       │   └── environments
│       │       └── *.ts
│       │   └── http_server
│       │       └── *.ts
│       │   └── repositories
│       │       └── *_repository.ts
│       │   └── folder
│       │       └── *.ts
|       |
│       ├── interfaces
│       │   └── http
|       |       └── controllers
│       │           └── *_controller.ts
|       |       └── middleware
│       │           └── *_middleware.ts
|       |       └── presenters
│       │           └── *_routes.ts
│       │
|       ├── shared
│       │   └── base_error.ts
│       │   └── either.ts
│       │   └── http_response_factory.ts
│       │   └── i_controller_base.ts
│       │   └── i_rotes.ts
│       │   └── router_config.ts
│       │
|       ├── ioc.ts
|       ├── main.ts
|  
|  
│   └── tests
|       ├── applications 
|       ├── business 
|       ├── infrastructure 
|       ├── interfaces 
|       ├── mocks 
|       ├── shared 
```

## Installation

- Pull

```bash
git pull https://github.com/ralvescosta/node_base_project.git
```

- Get Pkg's

```bash
yarn install
```

- To configure the Environment to run the application

```bash
docker-compose -f docker-compose.environments.yml up -d
```

- To run the application with nodemon

```bash
yarn start:dev
```

- To run the application in debugger mode press F5
