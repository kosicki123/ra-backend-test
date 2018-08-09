FROM node:10.8.0-alpine

RUN mkdir -p usr/src/app

WORKDIR usr/src/app

EXPOSE 3000

COPY package.json .

RUN npm install --silent --progress=false

COPY . .

CMD ["npm", "start"]
