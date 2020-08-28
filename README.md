# Simple Web Microservice with RabbitMQ Producer

[![Build Status](https://travis-ci.com/lmnzr/node-simple-microservice.svg?branch=development)](https://travis-ci.com/lmnzr/node-simple-microservice?branch=development)
[![Coverage Status](https://coveralls.io/repos/github/lmnzr/node-simple-microservice/badge.svg?branch=development)](https://coveralls.io/github/lmnzr/node-simple-microservice?branch=development)
[![Known Vulnerabilities](https://snyk.io/test/github/lmnzr/node-simple-microservice/badge.svg?branch=development)](https://snyk.io/test/github/lmnzr/node-simple-microservice)

## Description

In this project I build a simple Node JS Application for publishing message to RabbitMQ message broker.

## Requirement
To use the application it is required to use:
+ [NodeJS](https://nodejs.org/en/)
+ [RabbitMQ](https://www.rabbitmq.com/)

## Pipeline
The CI/CD pipeline is run using [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/). 
It consists of three stage:
+ Test phase where the code is build then tested using docker environment. The coverage report then published to [Codecov](https://codecov.io/)
+ Deploy phase where the application deployed to [Heroku](https://www.heroku.com/).
+ Then post stage called ping to check if application is up and running in Heroku.
