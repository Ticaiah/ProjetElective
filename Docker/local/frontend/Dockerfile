FROM node:lts

WORKDIR /app

COPY ./frontend/package.json /app

RUN npm install && npm cache clean --force

ENV PATH ./node_modules/.bin/:$PATH