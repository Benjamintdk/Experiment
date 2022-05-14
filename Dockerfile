FROM node:16

WORKDIR /usr/src/app

COPY package.json package-lock.json index.js ./

RUN npm install 

CMD npm start