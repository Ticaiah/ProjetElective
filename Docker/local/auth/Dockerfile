FROM node:lts

WORKDIR /app

COPY ./backend/auth/package.json /app

RUN npm install && npm cache clean --force

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

ENV PATH ./node_modules/.bin/:$PATH

ENV HOST 0.0.0.0

ENV PORT 6060