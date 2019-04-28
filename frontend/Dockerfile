FROM node:8.15.1-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN yarn
COPY src /usr/src/app/src
COPY public /usr/src/app/public