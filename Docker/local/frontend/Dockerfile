FROM node:lts

WORKDIR /app

COPY ./frontend/package.json /app

RUN npm install && npm cache clean --force

ENV PATH ./node_modules/.bin/:$PATH

ENV HOST 0.0.0.0