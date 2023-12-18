FROM node:19-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=production

COPY . .

CMD [ "node", "dist/main" ]