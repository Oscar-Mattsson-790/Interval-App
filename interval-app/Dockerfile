FROM node:18-alpine

WORKDIR /react-docker/

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5172

CMD [ "npm", "run", "dev" ]