FROM node
WORKDIR /usr/src/app
COPY package.json .
RUN yarn global add pm2
RUN yarn
COPY app /usr/src/app/app