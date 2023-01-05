<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Documentation 

### All the Calendary documentation is here in **[Notion](https://jungle-tea-1ef.notion.site/Calendary-App-Docs-6ed8a93a8c1d4d5a92a718c61caef648)**
<br/>

## 🚀 Getting Started 
### 🟠 Pre-requirements
* npm
* node
* docker

## Installation

```bash
$ npm install
```

## Running the app

- First step initialize docker:

```bash
# create conteiner with postgreSQL
$ npm run dockerUp

# optional : view container information
$ npm run dockerView

# opcional : stop the active containers
$ npm run dockerStop

# opcional : starts existing containers
$ npm run dockerStart
```

- Second step initialize api:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 🖥 Technologies
* node
* nest
* jwt
* postgreSQL
* jest
* passport
* swagger
* sequelize
* typescript

## 👥 Authors
* 👨🏻‍💻  [Leonardo Fontan](https://github.com/Lio-n)

## Useful resources

- ### [Docker Docs](https://docs.docker.com/reference/)
- ### [Nestjs Docs](https://docs.nestjs.com/)
- ### [Sequelize Docs](https://sequelize.org/)
- ### [Validation decorators](https://github.com/typestack/class-validator#validation-decorators)
- ### [How to Handle Database Timezones](https://www.databasestar.com/database-timezones/)
- ### [Sequelize Docs](https://www.databasestar.com/database-timezones/)
- ### [Decorators and some other features for sequelize](https://github.com/sequelize/sequelize-typescript#sequelize-typescript)