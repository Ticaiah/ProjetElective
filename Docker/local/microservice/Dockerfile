FROM node:lts-alpine

WORKDIR /app

COPY ./backend/microservice/package.json /app

RUN npm install && npm cache clean --force

ENV PATH ./node_modules/.bin/:$PATH

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

ENV HOST 0.0.0.0

ENV PORT 6060