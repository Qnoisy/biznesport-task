FROM node:18-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm ci

RUN npm i -g sequelize-cli

COPY . .

EXPOSE 8080